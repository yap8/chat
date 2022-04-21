import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/index.css'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
  const user = useSelector(state => state.user)

  const time = message.created_at.split(' ')[1].substring(0, message.created_at.split(' ')[1].length - 3)

  return (
    <li className={`relative mb-2 first:mb-0 ${message.sender_id === user.id ? ' ml-auto' : ' mr-auto'}`}>
      <Menu
        transition
        menuButton={(
          <MenuButton className="py-2 px-4 rounded bg-white shadow flex transition hover:bg-gray-200">
            <p className="mr-4">{message.content}</p>
            <p className="text-gray-500 relative top-1">{time}</p>
          </MenuButton>
        )}
      >
        <MenuItem
          className="py-2 px-6"
        >Copy</MenuItem>
        <MenuItem
          className="py-2 px-6"
        >Delete</MenuItem>
      </Menu>
    </li>
  )
}

export default Message
