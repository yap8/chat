import { useDispatch, useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import mergeClasses from '../../helpers/mergeClasses'
import { clearMessages } from '../../redux/actions/messagesActions'

const ChatItem = ({ id, title, lastMessageContent, lastMessageTime }) => {
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const linkClasses = {
    base: 'p-4 flex transition group-hover:bg-gray-200 dark:group-hover:bg-slate-700',
    active: chat && chat.id === id ? 'bg-gray-200 dark:bg-slate-700' : ''
  }

  const handleClick = () => dispatch(clearMessages())

  return (
    <li className="group">
      <Link
        className={mergeClasses(linkClasses)}
        to={chat && chat.id === id ? '/' : `/chats/${id}`}
        onClick={handleClick}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400 dark:text-white" />
        </div>
        <div className="w-full truncate mr-4">
          <h4 className="font-semibold truncate dark:text-white">{title}</h4>
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
