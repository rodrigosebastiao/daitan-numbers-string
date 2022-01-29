import StringNumber from "../stringNumber";

describe("on input value", () => {
    test("expect to return: Zero", () => {
        const currentNumber = new StringNumber(0);
        expect(currentNumber.numberToString).toBe("Zero");
    });

    test("expect to return: Nine", () => {
        const currentNumber = new StringNumber(9);
        expect(currentNumber.numberToString).toBe("Nine");
    });

    test("expect to return: Eleven", () => {
        const currentNumber = new StringNumber(11);
        expect(currentNumber.numberToString).toBe("Eleven");
    });

    test("expect to return: Nineteen", () => {
        const currentNumber = new StringNumber(19);
        expect(currentNumber.numberToString).toBe("Nineteen");
    });

    test("expect to return: Twenty", () => {
        const currentNumber = new StringNumber(20);
        expect(currentNumber.numberToString).toBe("Twenty");
    });

    test("expect to return: Twenty-Two", () => {
        const currentNumber = new StringNumber(22);
        expect(currentNumber.numberToString).toBe("Twenty-Two");
    });

    test("expect to return: Ninety-Nine", () => {
        const currentNumber = new StringNumber(99);
        expect(currentNumber.numberToString).toBe("Ninety-Nine");
    });

    test("expect to return: One Hundred", () => {
        const currentNumber = new StringNumber(100);
        expect(currentNumber.numberToString).toBe("One Hundred");
    });

    test("expect to return: One Hundred Five", () => {
        const currentNumber = new StringNumber(105);
        expect(currentNumber.numberToString).toBe("One Hundred Five");
    });

    test("expect to return: One Hundred Nine", () => {
        const currentNumber = new StringNumber(109);
        expect(currentNumber.numberToString).toBe("One Hundred Nine");
    });

    test("expect to return: Five Hundred Fifty-Two", () => {
        const currentNumber = new StringNumber(552);
        expect(currentNumber.numberToString).toBe("Five Hundred Fifty-Two");
    });

    test("expect to return: Nine Hundred Ninety-Nine", () => {
        const currentNumber = new StringNumber(999);
        expect(currentNumber.numberToString).toBe("Nine Hundred Ninety-Nine");
    });

    test("expect to return: One Thousand", () => {
        const currentNumber = new StringNumber(1000);
        expect(currentNumber.numberToString).toBe("One Thousand");
    });

    test("expect to return: One Thousand One", () => {
        const currentNumber = new StringNumber(1001);
        expect(currentNumber.numberToString).toBe("One Thousand One");
    });

    test("expect to return: One Thousand One Eleven", () => {
        const currentNumber = new StringNumber(1011);
        expect(currentNumber.numberToString).toBe("One Thousand Eleven");
    });

    test("expect to return: One Thousand One Hundred Ninety-One", () => {
        const currentNumber = new StringNumber(1191);
        expect(currentNumber.numberToString).toBe("One Thousand One Hundred Ninety-One");
    });

    test("expect to return: Nineteen Thousand Five Hundred Fifty-Eight", () => {
        const currentNumber = new StringNumber(19558);
        expect(currentNumber.numberToString).toBe("Nineteen Thousand Five Hundred Fifty-Eight");
    });


});