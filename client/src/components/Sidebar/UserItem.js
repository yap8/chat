import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import mergeClasses from '../../helpers/mergeClasses'
import { createChat } from '../../redux/actions/chatsActions'
import { setUsers } from '../../redux/actions/usersActions'

const UserItem = ({ id, name }) => {
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const buttonClasses = {
    base: 'p-4 flex items-center transition group-hover:bg-gray-200',
    active: chat && chat.id === id ? 'bg-gray-200' : ''
  }

  const handleClick = () => {
    dispatch(createChat(id))
    dispatch(setUsers(null))
  }

  return (
    <li className="group">
      <button
        className={mergeClasses(buttonClasses)}
        onClick={handleClick}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate">
          <h4 className="text-xl font-semibold truncate">{name}</h4>
        </div>
      </button>
    </li>
  )
}

export default UserItem
