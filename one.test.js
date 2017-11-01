const one = require('./one');

test('one should be equal to two', () => {
    expect(one).toBe(2);
});

test('one should be greather than zero', () => {
    expect(one).toBeGreaterThan(0);
});