import * as fs from "fs";
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const read = async () => {
    const filePath = getAbsolutePath(__filename, "fileToRead.txt");

    await fs.readFile(filePath, 'utf8', ( err, data ) => {
        if (err) throw new Error(`FS operation failed`);
        console.log(data);
    });
};

read();
