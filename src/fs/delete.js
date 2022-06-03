import * as fs from "fs";

export const remove = async () => {
    await fs.unlink('./files/fileToRemove.txt', (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

remove();
