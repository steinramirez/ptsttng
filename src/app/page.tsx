'use client';

import Image from 'next/image'
import React from 'react'
import ProfileSection from '@/components/ProfileSection';


export default function Home() {
  

  return (
    <div className="App">
      {/* Contenido de la aplicacion */}
      <ProfileSection />
    </div>
  );
}

