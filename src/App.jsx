
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './assets/components/NavBar'
import ItemListContainer from './assets/components/ItemListContainer'

function App() {

  return (
   <BrowserRouter>
   <NavBar/>

   <Routes>

<Route exact path="/category/:categoryId" element={<ItemListContainer/>} />

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
