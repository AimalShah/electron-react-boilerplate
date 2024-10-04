import { Button } from 'flowbite-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Startup() {
  const navigate = useNavigate();

  return (
    <section className="bg-white flex flex-col items-center justify-center gap-8 dark:bg-gray-900 min-h-screen">
        <div className='text-5xl font-body font-bold'>
          Hostel Management App
        </div>
        <Button type="button" className="w-1/2" onClick={() => navigate("/home")}>ENTER</Button>
  </section>
  )
}
