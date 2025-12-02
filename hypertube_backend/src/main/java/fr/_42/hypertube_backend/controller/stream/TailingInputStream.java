package fr._42.hypertube_backend.controller.stream;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.util.function.Supplier;

public class TailingInputStream extends InputStream {

    private final RandomAccessFile raf;
    private final Supplier<Boolean> isDownloadComplete;
    private final Supplier<Boolean> isDownloadingFailed;

    /**
     * @param file The file currently being downloaded to disk.
     * @param isDownloadComplete A lambda function returning true if the torrent is 100% finished.
     * @param isDownloadingFailed A lambda function returning true if the torrent stopped unexpectedly.
     */
    public TailingInputStream(File file, Supplier<Boolean> isDownloadComplete, Supplier<Boolean> isDownloadingFailed) throws IOException {
        this.raf = new RandomAccessFile(file, "r");
        this.isDownloadComplete = isDownloadComplete;
        this.isDownloadingFailed = isDownloadingFailed;
    }

    /**
     * Reads a single byte. (Inefficient, but required by InputStream contract)
     */
    @Override
    public int read() throws IOException {
        byte[] buffer = new byte[1];
        int result = read(buffer, 0, 1);
        if (result == -1) {
            return -1;
        }
        return buffer[0] & 0xFF; // Convert signed byte to unsigned int
    }

    /**
     * Reads an array of bytes. This is what FFmpeg will actually call.
     */
    @Override
    public int read(byte[] b, int off, int len) throws IOException {
        int bytesRead = raf.read(b, off, len);

        // Case 1: We read data successfully. Return the count.
        if (bytesRead != -1) {
            return bytesRead;
        }

        // Case 2: We hit EOF, but the download is NOT finished.
        // We must wait for the Producer (Torrent) to write more data.
        if (!isDownloadComplete.get()) {
            // Safety check: If download crashed/stopped, we should stop too.
            if (isDownloadingFailed.get()) {
                return -1;
            }

            try {
                // Wait for a bit (buffer) to let the torrent catch up
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new IOException("Stream interrupted while waiting for data", e);
            }

            // RECURSIVE CALL: Try reading again after the sleep
            return read(b, off, len);
        }

        // Case 3: We hit EOF and the download IS finished.
        // This is the real end of the movie.
        return -1;
    }

    @Override
    public void close() throws IOException {
        raf.close();
    }
}
