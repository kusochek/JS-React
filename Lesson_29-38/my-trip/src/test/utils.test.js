import { calc, getUser, sum } from './utils';

test('Check that function sum return correct value', () => {
  const result = sum(2, 5);

  expect(result).toBe(7);
});

describe('function calc', () => {
  it('case +', () => {
    const result = calc(1, 2, '+');

    expect(result).toBe(3);
  });

  it('case *', () => {
    const result = calc(10, 2, '*');

    expect(result).toBe(20);
  });

  it('case /', () => {
    const result = calc(10, 2, '/');

    expect(result).toBe(5);
  });

  it('case -', () => {
    const result = calc(1, 2, '-');

    expect(result).toBe(-1);
  });

  it('empty', () => {
    const result = calc(1, 2);

    expect(result).toBe(undefined);
  });
});

test('Check that getUser return correct value', () => {
  const result = getUser({ firstName: 'Sasha', lastName: 'Dontsova' });

  expect(result).toEqual({
    firstName: 'Sasha',
    lastName: 'Dontsova',
    love: true,
  });
});
