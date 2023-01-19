import '@testing-library/jest-dom';
import operate from '../logic/Operate';

describe('test operate.js file', () => {
  test('01. test operate', () => {
    const value = operate(12, 3, '+');
    expect(value).toBe('15');
  });

  test('02. test operate', () => {
    const value = operate(12, 3, '-');
    expect(value).toBe('9');
  });

  test('03. test operate', () => {
    const value = operate(12, 3, 'x');
    expect(value).toBe('36');
  });

  test('04. test operate', () => {
    const value = operate(12, 3, '÷');
    expect(value).toBe('4');
  });

  test('05. test operate', () => {
    const value = operate(12, 0, '÷');
    expect(value).toBe("Can't divide by 0.");
  });

  test('06. test operate', () => {
    const value = operate(12, 5, '%');
    expect(value).toBe('2');
  });

  test('07. test operate', () => {
    const value = operate(5, 0, '%');
    expect(value).toBe("Can't find modulo as can't divide by 0.");
  });
});
