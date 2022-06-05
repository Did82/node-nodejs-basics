import { getAbsolutePath } from "../utils/path.js";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export const write = async () => {
    const filePath = getAbsolutePath(__filename, "fileToWrite.txt");
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

write();
