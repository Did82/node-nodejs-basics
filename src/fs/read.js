import * as fs from "fs";

export const read = async () => {
    await fs.readFile('./files/fileToRead.txt', 'utf8', ( err, data ) => {
        if (err) throw new Error(`FS operation failed`);
        console.log(data);
    });
};

read();
