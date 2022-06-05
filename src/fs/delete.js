import * as fs from "fs";
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const remove = async () => {
    const filePath = getAbsolutePath(__filename, "fileToRemove.txt");

    await fs.unlink(filePath, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

remove();
