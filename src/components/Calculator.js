import React, { useState } from 'react';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const initState = {
    value: null,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(initState);

  const handleClick = (event) => {
    const buttonName = event.target.getAttribute('data-value');
    setState((state) => calculate(state, buttonName));
  };

  const { value, next, operation } = state;
  return (
    <div data-testid="calculator" className="calculator">
      <div className="display">
        {value}
        {operation}
        {next}
      </div>
      <div className="keypad">
        <button data-value="AC" className="key" type="button" onClick={handleClick}>AC</button>
        <button data-value="+/-" className="key" type="button" onClick={handleClick}>+/-</button>
        <button data-value="%" className="key" type="button" onClick={handleClick}>%</button>
        <button data-value="÷" className="key color-button" type="button" onClick={handleClick}>÷</button>
        <button data-value="7" className="key" type="button" onClick={handleClick}>7</button>
        <button data-value="8" className="key" type="button" onClick={handleClick}>8</button>
        <button data-value="9" className="key" type="button" onClick={handleClick}>9</button>
        <button data-value="x" className="key color-button" type="button" onClick={handleClick}>x</button>
        <button data-value="4" className="key" type="button" onClick={handleClick}>4</button>
        <button data-value="5" className="key" type="button" onClick={handleClick}>5</button>
        <button data-value="6" className="key" type="button" onClick={handleClick}>6</button>
        <button data-value="-" className="key color-button" type="button" onClick={handleClick}>-</button>
        <button data-value="1" className="key" type="button" onClick={handleClick}>1</button>
        <button data-value="2" className="key" type="button" onClick={handleClick}>2</button>
        <button data-value="3" className="key" type="button" onClick={handleClick}>3</button>
        <button data-value="+" className="key color-button" type="button" onClick={handleClick}>+</button>
        <button data-value="0" className="key double-size" type="button" onClick={handleClick}>0</button>
        <button data-value="." className="key" type="button" onClick={handleClick}>.</button>
        <button data-value="=" className="key color-button" type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
