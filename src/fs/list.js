import * as fs from "fs";

export const list = async () => {
    await fs.readdir("files", ( err, files ) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    });
};

list();
