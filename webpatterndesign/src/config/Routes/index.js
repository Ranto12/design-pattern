import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers