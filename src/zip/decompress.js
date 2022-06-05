import { getAbsolutePath } from "../utils/path.js";
import * as fs from "fs";
import { fileURLToPath } from "url";
import * as zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);

export const decompress = async () => {
    const filePath = getAbsolutePath(__filename, "fileToCompress.txt");
    const archivePath = getAbsolutePath(__filename, "archive.gz");
    const fileStream = fs.createReadStream(archivePath);
    const archiveStream = fs.createWriteStream(filePath);
    const gzip = zlib.createGunzip();
    fileStream.pipe(gzip).pipe(archiveStream);
};

decompress();
