import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'

const Header = ({ name }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">
      <FaUserCircle className="text-5xl text-gray-400 mr-4" />
      <h1 className="w-full font-semibold text-2xl">{name}</h1>
      <button className="group">
        <BsThreeDotsVertical className="w-6 h-6 text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default Header
