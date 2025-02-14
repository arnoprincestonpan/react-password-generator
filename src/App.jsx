import './App.css'
import { useState } from 'react';

function App() {
  // length of password
  const [length, setLength] = useState(8);

  // Conditions (i.e. Number in password? Character in password?)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // Actual Password
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly // no one can change the generated pasword directly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input
          className='cursor-pointer'
          type='range'
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name=""
          id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
      </div>
    </div>
  )
}

export default App
