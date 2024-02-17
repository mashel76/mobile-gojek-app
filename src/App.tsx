import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/home"
import Order from "./pages/order"
import Menu2 from "./pages/menu2"
import History from "./pages/history"
import Chat from "./pages/chat"
import Settings from "./pages/settings"
import Nav from "./components/Bottom"
function App() {
  const location = useLocation()
  return (
    <>
      <div className='bg-gray-300 h-auto'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/history" element={<History />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        {/* {location.pathname === "/settings" && <Nav />} */}
      </Routes>
      <Nav />
      </div>
    </>
  )
}

export default App
