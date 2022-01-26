import React from 'react'
import Login from "./pages/Login"
import Password from "./pages/Password"
import { Routes, Route } from "react-router-dom"

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<Password />} />
    </Routes>
  )
}