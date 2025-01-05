import React, { useEffect, useState } from 'react'

export default function Loca1_score() {
    const [gLoca1, setGLoca1] = useState('');

    useEffect (() => {
        const fetchGLoca1 = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/score');
            if (!response.ok) {
                throw new error('Network response was not ok');
            };
            const data = await response.json();
            setGLoca1(data);
        }
        fetchGLoca1();
    },[setGLoca1])

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form>
            <div>
                <p>AG : AG188</p>
            </div>
            <div>
                <p>ROW : Aတန်း</p>
            </div>
            <div>
                <p>LOCA : ဆိုင်(1)</p>
            </div>
            <div>
                <input
                    placeholder='Enter something'
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
            </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </>

  )
}
