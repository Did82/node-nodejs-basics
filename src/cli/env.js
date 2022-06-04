export const parseEnv = () => {
    const env = process.env;
    const envKeysArr = Object.keys(env);
    const rssEnvFiltered = envKeysArr.filter(key => key.startsWith('RSS_'));
    const rssEnvToPrint = rssEnvFiltered.map(key => `${key}=${env[key]}`).join('; ')
    console.log(rssEnvToPrint);
};

parseEnv();
