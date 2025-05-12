import React from 'react'
import {cookies} from 'next/headers'

async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  
  // Utilisation de console.error pour une meilleure visibilité dans les logs serveur
  console.error('Server-side log - Theme:', theme);
  
  // Vous pouvez aussi afficher le thème dans le composant pour le débugger
  return (
    <div>
      <h1 className='text-3xl font-bold text-green-400'>
        About Page {new Date().toLocaleTimeString()}
      </h1>
      <p className='mt-4'>Current theme: {theme || 'Not set'}</p>
    </div>
  )
}

export default AboutPage
