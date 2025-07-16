import orderByProps from '../src/index';

describe('orderByProps', () => {
  test('sorts by given order and then alphabetically', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('works with empty order', () => {
    const obj = { b: 2, a: 1 };
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);
  });

  test('works with empty object', () => {
    expect(orderByProps({}, ['a', 'b'])).toEqual([]);
  });

  test('ignores order keys not in object', () => {
    const obj = { a: 1, b: 2 };
    const result = orderByProps(obj, ['c', 'a']);
    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);
  });
}); 