import '@testing-library/jest-dom';
import calculate from '../logic/Calculate';
import operate from '../logic/Operate';

describe('test calculate.js file', () => {
  test('01. test "AC" button pressed', () => {
    const obj = {
      value: '5',
      next: '10',
      operation: '+',
    };
    const buttonName = 'AC';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({
      value: null,
      next: null,
      operation: null,
    });
  });

  test('02. test "0" button pressed', () => {
    const obj = {
      value: null,
      next: '0',
      operation: null,
    };
    const buttonName = '0';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({});
  });

  test('03. test "30" pressed', () => {
    const obj = {
      value: null,
      next: '3',
      operation: '+',
    };
    const buttonName = '0';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: obj.next + buttonName });
  });

  test('04. test pressed "+ 0"', () => {
    const obj = {
      value: null,
      next: null,
      operation: '+',
    };
    const buttonName = '0';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: buttonName });
  });

  test('05. test calculate', () => {
    const obj = {
      value: null,
      next: '3',
      operation: null,
    };
    const buttonName = '0';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ next: obj.next + buttonName, value: null });
  });

  test('06. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: null,
    };
    const buttonName = '4';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ next: buttonName, value: null });
  });

  test('07. test calculate', () => {
    const obj = {
      value: null,
      next: '.',
      operation: null,
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj });
  });

  test('08. test calculate', () => {
    const obj = {
      value: null,
      next: '1',
      operation: null,
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: `${obj.next}.` });
  });

  test('09. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: '+',
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: '0.' });
  });

  test('10. test calculate', () => {
    const obj = {
      value: '.',
      next: null,
      operation: null,
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({});
  });

  test('11. test calculate', () => {
    const obj = {
      value: '4',
      next: null,
      operation: null,
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: `${obj.value}.` });
  });

  test('12. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: null,
    };
    const buttonName = '.';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: '0.' });
  });

  test('13. test calculate', () => {
    const obj = {
      value: '9',
      next: '8',
      operation: '+',
    };
    const buttonName = '=';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({
      value: operate(obj.value, obj.next, obj.operation),
      next: null,
      operation: null,
    });
  });

  test('14. test calculate', () => {
    const obj = {
      value: '7',
      next: '8',
      operation: null,
    };
    const buttonName = '=';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({});
  });

  test('15. test calculate', () => {
    const obj = {
      value: '7',
      next: '8',
      operation: null,
    };
    const buttonName = '+/-';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, next: (-1 * parseFloat(obj.next)).toString() });
  });

  test('16. test calculate', () => {
    const obj = {
      value: '7',
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, value: (-1 * parseFloat(obj.value)).toString() });
  });

  test('17. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({});
  });

  test('18. test calculate', () => {
    const obj = {
      value: '15',
      next: null,
      operation: null,
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, operation: buttonName });
  });

  test('19. test calculate', () => {
    const obj = {
      value: '15',
      next: null,
      operation: '+',
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ ...obj, operation: buttonName });
  });

  test('20. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: '+',
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ value: 0, operation: buttonName });
  });

  test('21. test calculate', () => {
    const obj = {
      value: 8,
      next: 5,
      operation: '+',
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({
      value: operate(obj.value, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    });
  });

  test('22. test calculate', () => {
    const obj = {
      value: null,
      next: null,
      operation: null,
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({ operation: buttonName });
  });

  test('23. test calculate', () => {
    const obj = {
      value: 5,
      next: 10,
      operation: null,
    };
    const buttonName = '+';
    const value = calculate(obj, buttonName);
    expect(value).toEqual({
      value: obj.next,
      next: null,
      operation: buttonName,
    });
  });
});
