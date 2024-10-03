'use client';
import Image from 'next/image';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { use, useState, useEffect, useCallback } from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function Home() {
  const [servo, setServo] = useState(null);

  const firebaseConfig = {
    apiKey: 'AIzaSyAVAgUbn0L5J8LXeQP9C2-CijAqy-51Cp0',
    authDomain: 'projectep-abbca.firebaseapp.com',
    databaseURL: 'https://projectep-abbca-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'projectep-abbca',
    storageBucket: 'projectep-abbca.appspot.com',
    messagingSenderId: '647038433468',
    appId: '1:647038433468:web:519557d34f7bc92cda38b9',
    measurementId: 'G-KRNY6MCYBD',
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const readData = useCallback(() => {
    const servoRef = ref(db, 'servo');
    onValue(servoRef, (snapshot) => {
      const data = snapshot.val();
      setServo(data);
    });
  }, [db]);

  useEffect(() => {
    readData();
  }, [readData]);

  const handleServo = () => {
    setServo(servo === 0 ? 1 : 0);
    set(ref(db, 'servo'), servo === 0 ? 1 : 0);
  };
  return (
    <div>
      <div className="w-full h-auto grid gap-2 justify-items-center p-12 mt-10 max-lg:gap-1 max-lg:mt-28">
        <h1 className="font-Poppins font-bold text-xl max-lg:text-lg ">ELINS PLANET PROJECT</h1>
        <h1 className="font-Poppins font-bold text-5xl max-lg:text-3xl">APIN : Atap Pintar</h1>
        <h1 className="font-Poppins font-bold text-3xl max-lg:text-lg">Solusi Cerdas Atap Anti-Hujan</h1>
      </div>

      {/* button  */}
      <div className="w-full flex justify-center">
        <button
          className={`${
            servo === 0 ? 'bg-red-600 border-dark border-4' : 'bg-slate-400 border-slate-600 border-4'
          } min-w-32 font-Poppins dark:shadow-slate-700 font-bold  text-light aspect-square rounded-full shadow-slate-600 shadow-lg hover:shadow-xl hover:shadow-slate-300 hover:scale-105 hover:duration-300 transform transition-all ease-in-out duration-300 active:scale-95`}
          onClick={handleServo}
        >
          <p className={`${servo === 0 ? 'text-light' : 'text-dark'} text-5xl`}>
            <i class="fa-solid fa-power-off"></i>
          </p>
        </button>
      </div>
    </div>
  );
}
