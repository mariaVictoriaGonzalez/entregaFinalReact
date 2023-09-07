import { NavBar } from './components/navbar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect } from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'
import { firestore } from './firebase/client'

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  )
}

export default App
