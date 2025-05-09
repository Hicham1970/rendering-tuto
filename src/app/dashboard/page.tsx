"use client"
// This is a client component, so you can use hooks like useState and useEffect here

import React from 'react'
import { useState } from 'react';


function DashboardPage() {
    // suivre l'affichage de la console pour savoir si le composant est un composant serveur ou client, en utilisant console.log 
    console.log('Dashboard page rendered on the client component')


    const [name, setName] =useState("")
  return (
      <div>
          <h1>Dashboard</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <p className='text-3xl font-bold text-green-400'>Hello {name}</p>
      
    </div>
  )
}

export default DashboardPage
