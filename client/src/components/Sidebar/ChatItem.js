import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import mergeClasses from '../../helpers/mergeClasses'

const ChatItem = ({ id, title}) => {
  const chat = useSelector(state => state.chat)

  const linkClasses = {
    base: 'p-4 flex transition group-hover:bg-gray-200',
    active: chat && chat.id === id ? 'bg-gray-200' : ''
  }

  return (
    <li className="group">
      <Link
        className={mergeClasses(linkClasses)}
        to={`/chats/${id}`}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate mr-4">
          <h4 className="font-semibold">{title}</h4>
          {/* <p className="truncate">{lastMessage.text}</p> */}
        </div>
        {/* <div className="flex flex-col items-end">
          <div className={unread ? 'text-blue-500' : 'text-gray-400'}>{lastMessage.date}</div>
          {unread ? (
            <div className="flex items-center justify-center bg-blue-500 text-white w-7 h-7 rounded-full">{unread}</div>
          ) : ''}
        </div> */}
      </Link>
    </li>
  )
}

export default ChatItem
