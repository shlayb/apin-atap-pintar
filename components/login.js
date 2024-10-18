'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { set } from 'firebase/database';

export default function Login() {
  const [id, setId] = useState(null);
  const [pass, setPass] = useState(null);
  const setlocalstorage = useCallback((name, value) => {
    localStorage.setItem(name, value);
  }, []);
  return (
    <div className="w-auto p-16 flex justify-center">
      <div className="w-96 h-96 bg-slate-200 rounded-3xl shadow-slate-500 shadow-lg">
        <div className="w-full min-h-20 my-4 bg-slate-200 rounded-t-3xl flex justify-center items-center">
          <h1 className="font-Poppins font-bold text-3xl text-gray-600">Login</h1>
        </div>
        <div className="w-full h-auto my-4 bg-slate-200 rounded-b-3xl flex justify-center items-center">
          <input
            id="Id"
            type="text"
            placeholder="Masukan ID"
            className="p-4 w-full mx-8 max-lg:w-full rounded-xl transition-all duration-150 text-dark dark:text-light bg-light border-slate-700 border-2 dark:bg-dark"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div className="w-full h-auto my-4 bg-slate-200 rounded-b-3xl flex justify-center items-center">
          <input
            id="Pass"
            type="password"
            placeholder="Masukan Password"
            className="p-4 w-full mx-8 max-lg:w-full rounded-xl transition-all duration-150 text-dark dark:text-light bg-light border-slate-700 border-2 dark:bg-dark"
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <div className="w-full h-auto my-4 bg-slate-200 rounded-b-3xl flex justify-center items-center">
          <button
            className="p-4 w-48 mx-8 max-lg:w-full rounded-xl transition-all duration-150 text-light bg-dark border-slate-700 border-2 dark:bg-slate-200 dark:text-dark"
            onClick={() => {
              if (id === 'atap pintar' && pass === 'Admin123') {
                setlocalstorage('isLogin', 'true');
                window.location.reload();
              } else {
                alert('ID atau Password salah');
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
