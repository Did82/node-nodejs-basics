import * as fs from "fs";
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const rename = async () => {
    const oldFilePath = getAbsolutePath(__filename, "wrongFilename.txt");
    const newFilePath = getAbsolutePath(__filename, "properFilename.md");

    await fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

rename();
