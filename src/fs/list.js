import * as fs from "fs";
import { fileURLToPath } from "url";
import { getAbsolutePath } from "../utils/path.js";

const __filename = fileURLToPath(import.meta.url)

export const list = async () => {
    const filePath = getAbsolutePath(__filename, '');

    await fs.readdir(filePath, ( err, files ) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    });
};

list();
