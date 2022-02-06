import { useGetNum } from './GetANumber';
import * as NumberGen from './NumberGen';
import * as MockNumberGen from './__mocks__/NumberGen';

// tell Jest to replace anything in src/NumberGen with src/__mocks__/NumberGen
jest.mock('./NumberGen');

// Give me the mock class i've defined in __mocks__/NumberGen and let me
//    nickname it mockNumberGenConstructor
// Give me the mock function i've defined in __mocks__/NumberGen
const { default: mockNumberGenConstructor, mockGetNum, mockGetNumValue } =
    // Get these things from the NumberGen class, because I know that jest
    //     has secretly replaced it with the contents of MockNumberGen
    (NumberGen as unknown) as typeof MockNumberGen;

describe('The index "useGetNum" function', () => {
    beforeEach(() => {
        // Reset "amount of times called" back to 0 for each test
        jest.clearAllMocks();
    });

    it('Constructs a new NumberGen instance', () => {
        useGetNum();
        expect(mockNumberGenConstructor).toHaveBeenCalledTimes(1);
    });

    it("Calls getOne and returns it's value", () => {
        const val = useGetNum();
        expect(val).toBe(mockGetNumValue);
        expect(mockGetNum).toHaveBeenCalledTimes(1);
    });

    it('Example of customizing the mock for this test only', () => {
        mockGetNum.mockImplementationOnce(() => mockGetNumValue * 2);
        const val = useGetNum();
        expect(val).toBe(mockGetNumValue * 2);
    });
});
