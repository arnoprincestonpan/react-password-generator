import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // length of password
  const [length, setLength] = useState(8);

  // Conditions (i.e. Number in password? Character in password?)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // Actual Password
  const [password, setPassword] = useState('');

  // Password Reference (we want feedback when it is copied)
  const passwordRef = useRef(null);


  // UseCallback to generate password right away
  const generatePassword = useCallback(() => {
    // the password we're generating
    let pass = "";
    // the set of char, optional: numbers & symbols we're using
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    // the loop generates a random char/number/symbol from str for (every character in string) the length of the password
    for(let i = 1; i < length; i++){
      // the index of the character that we will be adding to the password
      const char = Math.floor(Math.random() * str.length + 1);
      // the char at set index will be added to the password
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  // useCallback helps avoid unnecesary re-renders by ensuring that generatePassword keeps the same reference unless its dependencies change

  useEffect(() => {
    generatePassword();
    console.log(password);
  }, [length, numberAllowed, charAllowed]);
 // useEffect needs to call the same generatePassword func, and useCallback ensure that useEffect doesn't get a new func on every render; unless length, numberAllowed or charAllowed is changed

  const copyPasswordToClipboard = () => {
    // using this we can write the state password into the clipboard
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select(); // highlights (selects the password), the '?' is just in case there's no password

  }


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
        ref={passwordRef}
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={() => copyPasswordToClipboard()}
        >
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
          onChange={(e) => setLength(e.target.valueAsNumber)}
          name=""
          id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev) // take the previous number and flip it! toggle to the opposite Bool
          }}
          name=""
          id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev) // take the previous number and flip it! toggle to the opposite Bool
          }}
          name=""
          id=""
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
