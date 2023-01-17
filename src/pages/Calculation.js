import React from 'react';
import Calculator from '../components/Calculator';

const Calculation = () => (
  <div
    className="main-container"
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <h2 className="page-title">
      Let&apos;s do some math!
    </h2>
    <Calculator />
  </div>
);

export default Calculation;
