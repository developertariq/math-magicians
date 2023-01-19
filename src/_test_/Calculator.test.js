// import React from 'react';
// import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import '@testing-library/jest-dom';
// import Calculator from '../components/Calculator';
// import Calculation from '../pages/Calculation';

// describe('Calculator page', () => {
//   test('renders Calculator page correctly', () => {
//     const tree = renderer.create(<Calculation />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   test('renders Calculator correctly', () => {
//     const tree = renderer.create(<Calculator />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   test('renders the correct Calculator', () => {
//     const { getByTestId } = render(
//       <Router>
//         <Calculator />
//       </Router>,
//     );
//     const calculator = getByTestId('calculator');
//     expect(calculator).toBeInTheDocument();
//   });
// });
