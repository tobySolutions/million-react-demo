import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { block, Block } from "million/react";

function Hello({ name }) {
  return <p>Hey there {name}</p>
}
 

// You can create a block either by:
 
// 1. Creating a reusable block
const HelloBlock = block(Hello)




function App() {

  return (
    <>
      {/* 2. Rendering a block inside the JSX */}
      <Block name="Million">{Hello}</Block>

      <HelloBlock name="Million"/>
    </>
  );
    
}

export default App
