import { FaUserCircle } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Header = () => {
  return (
    <div className="flex justify-between">
      <FaUserCircle className="text-5xl text-gray-400" />
      <button className="group">
        <BsThreeDotsVertical className="w-6 h-6 text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default Header
