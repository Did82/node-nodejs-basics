import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url)

export const copy = async () => {
    const __dirname = path.dirname(__filename);

    await fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, { errorOnExist: true, recursive: true, force: false }, ( err ) => {
        if (err) throw new Error(`FS operation failed`);
    });
};

copy();
