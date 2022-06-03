import * as fs from 'fs';

export const create = async () => {
    const data = 'I am fresh and young';
    await fs.writeFile('files/fresh.txt', data, { flag: 'wx' }, ( err ) => {
        if (err) throw new Error(`FS operation failed`);
    });
}

create();
