'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './component/Navbar';

const page: React.FC = () => {
  return (
    <div  style={{
      backgroundImage: 'url(/assets/background.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
          <Navbar />

    <div className='flex w-full justify-center mt-36 text-3xl text-white h-full '
   
  >
<Typewriter 

  words={[
    "شهدا را یاد کنیم، حتی با یک صلوات.",
    "شهدا زنده‌اند و نزد پروردگارشان روزی می‌خورند.",
    "جان‌ها فدا شد تا ایران بماند.",
    "هر شهید، چراغی است در مسیر هدایت.",
    "به یاد مردانی که با خون خود، آزادی را نوشتند.",
    "راه شهدا را ادامه دهیم؛ در ایمان، ایثار و مقاومت.",
    "شهیدان، پرچمداران حماسه و شرافت‌اند.",
    "وصیت شهدا: پاسداری از انقلاب و اسلام.",
    "لبیک یا حسین؛ شعاری که شهدا عملی کردند.",
    "ای شهیدان! راهتان را ادامه می‌دهیم با ایمان و عشق."
  ]}
  loop 
/>
      
    </div>
    </div>
  );
};

export default page;