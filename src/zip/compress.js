import { getAbsolutePath } from "../utils/path.js";
import * as fs from "fs";
import { fileURLToPath } from "url";
import * as zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);

export const compress = async () => {
    const filePath = getAbsolutePath(__filename, "fileToCompress.txt");
    const archivePath = getAbsolutePath(__filename, "archive.gz");
    const fileStream = fs.createReadStream(filePath);
    const archiveStream = fs.createWriteStream(archivePath);
    const gzip = zlib.createGzip();
    fileStream.pipe(gzip).pipe(archiveStream);
};

compress();
