const { spy, batch } = require('./index');

describe('micro-scroll-spy', () => {
  test('should process string input', () => {
    expect(spy('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => spy(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = spy('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
