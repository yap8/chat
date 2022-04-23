import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import mergeClasses from '../../helpers/mergeClasses'

const UserItem = ({ id, name }) => {
  const chat = useSelector(state => state.chat)

  const linkClasses = {
    base: 'p-4 flex items-center transition group-hover:bg-gray-200',
    active: chat && chat.id === id ? 'bg-gray-200' : ''
  }

  return (
    <li className="group">
      <Link
        className={mergeClasses(linkClasses)}
        to='/'
      >
        <div className="w-12 h-12 mr-4">
          <FaUserCircle className="text-5xl text-gray-400" />
        </div>
        <div className="w-full truncate">
          <h4 className="text-xl font-semibold truncate">{name}</h4>
        </div>
      </Link>
    </li>
  )
}

export default UserItem
