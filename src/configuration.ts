const envFetch = (key: string, default_val?: any) => {
    if (process.env[key]) return process.env[key];
    if (default_val) return default_val;
    throw new Error(`${key} unavailable`);
};

export const getPort = (): number => envFetch('PORT', 3000);

export const getHelloMsg = (): string => envFetch('HELLO_MSG');
