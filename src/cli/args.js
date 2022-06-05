export const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsObj = {};
    args.forEach(arg => {
        arg.startsWith('--') ? argsObj[arg.slice(2)] = args[args.indexOf(arg) + 1] : null;
    });
    const argsToPrint = Object.keys(argsObj).map(key => `${key} is ${argsObj[key]}`).join(', ');
    console.log(argsToPrint);
};

parseArgs();
