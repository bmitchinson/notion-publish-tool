import returnBen from './returnBen';

const result = returnBen();

test('sample function', () => {
    expect(result).not.toBe('ben');
    expect(result).toBe('Ben');
});
