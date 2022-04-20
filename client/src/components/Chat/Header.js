import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
  const { title } = useSelector(state => state.chat)

  return (
    <div className="flex justify-between items-center border-b bg-white p-4 shadow">
      <div className="w-12 h-12 mr-4">
        <FaUserCircle className="text-5xl text-gray-400" />
      </div>
      <h1 className="w-full font-semibold text-2xl">{title}</h1>
      <button className="group">
        <BsThreeDotsVertical className="w-6 h-6 text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default Header
