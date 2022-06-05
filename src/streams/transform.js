import {Transform} from 'stream';

export const transform = async () => {
    const transformStream = new Transform();
    transformStream._transform = (chunk, encoding, callback) => {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        transformStream.push(reversedChunk);
        transformStream.push('\n');
        callback();
    }
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
