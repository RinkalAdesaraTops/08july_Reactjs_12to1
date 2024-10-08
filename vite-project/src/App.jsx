import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'
import styled from 'styled-components'
import UseEffectexample from './UseEffectexample'
import Apicomponent from './Apicomponent'
import JsonserverExample from './JsonserverExample'

function App() {
  const ABC = styled.h3 
                `color:red
                `
  return (
    <>
      <h3>My Vite Project</h3>
      <ABC>kjdfhgk kdjfgh</ABC>
      <h3>Xyz</h3>
      <h3>My Vitedjskfh skjdfhksdj fkjfgjkg</h3>
      {/* <Firstcomponent /> */}
      {/* <UseEffectexample /> */}
      {/* <Apicomponent /> */}
      <JsonserverExample />
    </>
  )
}

export default App
