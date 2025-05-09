import React from 'react'


function AboutPage() { 
    console.log('About page rendered on the server component')
  return (
    <h1 className='text-3xl font-bold text-green-400'>
      About Page {new Date().toLocaleTimeString()}
    </h1>
  )
}

export default AboutPage
