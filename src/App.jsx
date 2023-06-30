import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EmailSender from './Component/EmailSender/EmailSender'
function App() {


  return (
    <>
    {/* <Blod title="This is the first blg" username="Anmol Jain" like= "500" /> */}

     {/* <UploadForm/> */}
      <EmailSender/>
         
    </>
  )
}

export default App
