import * as fs from "fs";
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const read = async () => {
    const filePath = getAbsolutePath(__filename, "fileToRead.txt");
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('data', ( data ) => {
            process.stdout.write(data);
        }
    );
    fileStream.on('end', () => {
            console.log();
        }
    );
    fileStream.on('error', ( err ) => {
            throw new Error(`FS operation failed: ${err}`);
        }
    );
};

read();
