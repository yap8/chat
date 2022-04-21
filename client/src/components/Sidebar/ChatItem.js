import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import mergeClasses from '../../helpers/mergeClasses'

const ChatItem = ({ id, title, lastMessageContent, lastMessageTime }) => {
  const chat = useSelector(state => state.chat)

  const linkClasses = {
    base: 'p-4 flex transition group-hover:bg-gray-200',
    active: chat && chat.id === id ? 'bg-gray-200' : ''
  }

  return (
    <li className="group">
      <Link
        className={mergeClasses(linkClasses)}
        to={chat && chat.id === id ? '/' : `/chats/${id}`}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate mr-4">
          <h4 className="font-semibold truncate">{title}</h4>
          <p className="text-gray-400 truncate">{lastMessageContent}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-gray-400">{lastMessageTime}</div>
        </div>
      </Link>
    </li>
  )
}

export default ChatItem
