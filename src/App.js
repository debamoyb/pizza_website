import React from 'react'
import Home from './component/Home'
import { store } from "./Redux/store"
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import OrderForm from './component/OrderForm'
import Sucess from './component/Success'
import Menu from './component/Menu'

const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orderform' element={<OrderForm />} />
        <Route path='/sucess' element={<Sucess />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;