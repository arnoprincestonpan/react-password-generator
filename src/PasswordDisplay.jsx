import { useRef } from 'react'

function PasswordDisplay({password, copyPassword, regeneratePassword}) {

  // Password Reference (we want feedback when it is copied)
  const passwordRef = useRef(null);

  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        // value={password} // parameter
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly // no one can change the generated pasword directly
        // ref={passwordRef} // useRef
        ref={passwordRef}
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        // onClick={() => copyPasswordToClipboard()} // parameter
        onClick={copyPassword}
        >
        Copy
        </button>
        <button className='outline-none bg-red-700 text-white px-3 py-0.5 shrink-0'
        // onClick={() => generatePassword()} // parameter 
        onClick={regeneratePassword}
        >
        {/* The magic here is that generatePassword() is remembered by useCallback() so it can be referenced and doesn't have to be recreated */}
        Regenerate
        </button>
    </div>
  )
}

export default PasswordDisplay