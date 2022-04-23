import { useDispatch, useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'

import mergeClasses from '../../helpers/mergeClasses'
import { createChat } from '../../redux/actions/chatsActions'
import { setUsers } from '../../redux/actions/usersActions'
import { setSearchValue } from '../../redux/actions/searchActions'

const UserItem = ({ id, name }) => {
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const buttonClasses = {
    base: 'w-full p-4 flex items-center transition group-hover:bg-gray-200 dark:group-hover:bg-slate-700',
    active: chat && chat.id === id ? 'bg-gray-200' : ''
  }

  const handleClick = () => {
    dispatch(createChat(id))
    dispatch(setUsers(null))
    dispatch(setSearchValue(''))
  }

  return (
    <li className="group">
      <button
        className={mergeClasses(buttonClasses)}
        onClick={handleClick}
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400 dark:text-white" />
        </div>
        <div className="truncate">
          <h4 className="text-xl font-semibold truncate dark:text-white">{name}</h4>
        </div>
      </button>
    </li>
  )
}

export default UserItem
