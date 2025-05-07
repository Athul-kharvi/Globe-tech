'use client';
import { useEffect, useState } from 'react';

const EmployeeCount = () => {
  const [count, setCount] = useState(0);
  const finalCount = 100;

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= finalCount) {
        clearInterval(interval);
      }
    }, 20); // speed of animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 text-center transition-all duration-500">
      <h2 className=" text-8xl font-bold text-black">
        {count}+
      </h2>
      <p className="text-6xl font-ftregolaneue text-orange-500 mt-2">Employees In Our Group</p>
    </div>
  );
};

export default EmployeeCount;
