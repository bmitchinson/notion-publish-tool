// eslint-disable-next-line @typescript-eslint/no-explicit-any
const envFetch = (key: string, default_val?: any) => {
    if (process.env[key]) return process.env[key];
    if (default_val) return default_val;
    throw new Error(`Env Var: "${key}" is unavailable`);
};

export const getPort = (): number => envFetch('PORT', 3000);

export const getHelloMsg = (): string => envFetch('HELLO_MSG');

export const themeName = 'bmitchinson_tranquilpeak';
