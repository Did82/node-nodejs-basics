import { createReadStream } from 'fs';
const { createHash } = await import('crypto');
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const calculateHash = async () => {
    const filePath = getAbsolutePath(__filename, "fileToCalculateHashFor.txt");
    const hash = createHash('sha256');
    const fileStream = createReadStream(filePath);
    fileStream.on('data', ( data ) => {
        hash.update(data);
    });
    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
    fileStream.on('error', ( err ) => {
        throw new Error(`FS operation failed: ${err}`);
    });
};

calculateHash();
