import React from 'react'
import Navbar from './assets/Components/Navbar'
import ItemListContainer from './assets/Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  )
}

export default App
