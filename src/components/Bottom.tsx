import { NavLink } from "react-router-dom"
import { IoIosHome, IoMdQrScanner } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdHistory } from "react-icons/md";

function Bottom() {
  return (
    <div className='bg-white h-12 w-full fixed bottom-0 rounded-t-lg z-10 text-gray-400 px-8 flex justify-between items-center text-2xl'>
      <NavLink to="/">
        <IoIosHome />
      </NavLink>
      <NavLink to="order">
        <FaClipboardList />
      </NavLink>
      <NavLink to="menu2">
        <IoMdQrScanner />
      </NavLink>
      <NavLink to="history">
        <MdHistory />
      </NavLink>
      <NavLink to="chat">
        <IoChatbubbleEllipses />
      </NavLink>
    </div>
  )
}

export default Bottom