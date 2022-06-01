const gift = require('./gift');

test('what is this?', () => {
    expect(gift(1)).toBe(null);
    expect(gift(2)).toBe(null);
    expect(gift(3)).toBe(' *\n***\n *\n');
    expect(gift(4)).toBe(null);
    expect(gift(5)).toBe('  *\n ***\n*****\n ***\n  *\n');
});