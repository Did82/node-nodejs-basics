import * as fs from 'fs';
import { getAbsolutePath } from "../utils/path.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)

export const create = async () => {
    const data = 'I am fresh and young';
    const filePath = getAbsolutePath(__filename, "fresh.txt");

    await fs.writeFile(filePath, data, { flag: 'wx' }, ( err ) => {
        if (err) throw new Error(`FS operation failed`);
    });
}

create();
