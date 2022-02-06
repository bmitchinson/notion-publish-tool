import NumberGen from './NumberGen';

export const useGetNum = (): number => {
    const gen = new NumberGen();
    return gen.getNum();
};
