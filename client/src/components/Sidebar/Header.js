import { useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Header = () => {
  const { name, avatar } = useSelector(state => state.user)
  
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className="w-12 h-12 mr-4">
        {avatar ? (
          <img src={avatar} alt="profile pic" />
        ) : (
          <FaUserCircle className="text-5xl text-gray-400" />
        )}
      </div>
      <h1 className="w-full font-semibold text-2xl">{name}</h1>
      <button className="group">
        <BsThreeDotsVertical className="w-6 h-6 text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default Header
