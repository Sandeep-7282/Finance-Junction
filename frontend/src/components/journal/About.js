import React from 'react'

export default function About(props) {
 
  return (
    <div className={` text-${props.Mode==='light'?'dark':'light'}`}>
       This is About page
    </div>
  )
}
