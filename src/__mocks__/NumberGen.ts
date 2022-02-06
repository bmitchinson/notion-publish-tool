export const mockGetNumValue = 2;
export const mockGetNum = jest.fn(() => mockGetNumValue);

const mockClass = jest.fn().mockImplementation(function () {
    return {
        getNum: mockGetNum,
    };
});

export default mockClass;
