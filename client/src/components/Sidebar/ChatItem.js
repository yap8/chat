import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ChatItem = ({ id, name }) => {
  return (
    <li className="group">
      <Link
        className="p-2 flex rounded transition group-hover:bg-gray-200"
        to={`/chats/${id}`}
      >
        <div className="w-12 h-12 mr-2">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full">
          <h4 className="font-semibold">{name}</h4>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </Link>
    </li>
  )
}

export default ChatItem
