'use client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { use, useState, useEffect, useCallback } from 'react';

export default function ToggleAuto() {
  const [modeAuto, setAuto] = useState(null);

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
    const servoRef = ref(db, 'isAuto');
    onValue(servoRef, (snapshot) => {
      const data = snapshot.val();
      setAuto(data);
    });
  }, [db]);

  useEffect(() => {
    readData();
  }, [readData]);

  const handleAuto = () => {
    setAuto(modeAuto === 0 ? 1 : 0);
    set(ref(db, 'isAuto'), modeAuto === 0 ? 1 : 0);
  };

  return (
    <div className="p-8">
      <button
        className={`${modeAuto == 0 ? 'bg-slate-300 justify-start duration-300' : 'bg-red-600 justify-end duration-300'}
          shadow-slate-400 shadow-lg min-w-32 min-h-14 rounded-full bg-slate-400 transition-all duration-300 flex items-center`}
        onClick={handleAuto}
      >
        {modeAuto == 1 ? <span className="font-Poppins font-medium text-xl p-3 text-gray-200">On</span> : <span></span>}
        <div className={`${modeAuto == 1 ? 'shadow shadow-slate-500' : 'shadow shadow-slate-500'} transition-all duration-300 w-14 h-14 bg-white rounded-full shadow-md m-1`}></div>
        {modeAuto == 0 ? <span className="inline-block align-middle font-Poppins font-medium text-xl p-3 text-gray-600">Off</span> : <span></span>}
      </button>
    </div>
  );
}
