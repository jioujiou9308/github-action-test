function sum(a, b) {
    return a + b;
}
// test
test('基本加法測試', () => {
    expect(sum(1, 2)).toBe(3);
});

module.exports = sum;
