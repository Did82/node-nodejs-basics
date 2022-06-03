import * as fs from "fs";

export const rename = async () => {
    await fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

rename();
