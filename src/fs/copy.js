import * as fs from "fs";

export const copy = async () => {
    await fs.cp('files', 'files_copy', { errorOnExist: true, recursive: true, force: false }, ( err ) => {
        if (err) throw new Error(`FS operation failed`);
    });
};

copy();
