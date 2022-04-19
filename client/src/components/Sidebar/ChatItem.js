import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ChatItem = ({ id, name, lastMessage, unread }) => {
  return (
    <li className="group">
      <Link
        className="p-2 flex rounded transition group-hover:bg-gray-200"
        to={`/chats/${id}`}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate mr-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="truncate">{lastMessage.text}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className={unread ? 'text-blue-500' : 'text-gray-400'}>{lastMessage.date}</div>
          {unread ? (
            <div className="flex items-center justify-center bg-blue-500 text-white w-7 h-7 rounded-full">{unread}</div>
          ) : ''}
        </div>
      </Link>
    </li>
  )
}

export default ChatItem
