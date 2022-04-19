import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ChatItem = ({ id, name, lastMessage }) => {
  return (
    <li className="group">
      <Link
        className="p-2 flex rounded transition group-hover:bg-gray-200"
        to={`/chats/${id}`}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate">
          <h4 className="font-semibold">{name}</h4>
          <p className="truncate">{lastMessage}</p>
        </div>
      </Link>
    </li>
  )
}

export default ChatItem
