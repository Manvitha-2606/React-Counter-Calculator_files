import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);

    if (op === '+') setResult(a + b);
    if (op === '-') setResult(a - b);
    if (op === '*') setResult(a * b);
    if (op === '%') setResult(b !== 0 ? a % b : 'Cannot divide by zero');
  };

  return (
    <div className="container">
      <h1>Counter & Calculator</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Calculator</h2>
      <input type="number" placeholder="First Number"
        value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Second Number"
        value={num2} onChange={(e) => setNum2(e.target.value)} />

      <div>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('%')}>%</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;