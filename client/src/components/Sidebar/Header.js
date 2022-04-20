import { useDispatch, useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { logout } from '../../redux/actions/authActions'

const Header = () => {
  const { name, avatar } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <div className="flex justify-between items-center border-b bg-white p-4">
      <div className="w-12 h-12 mr-4">
        {avatar ? (
          <img src={avatar} alt="profile pic" />
        ) : (
          <FaUserCircle className="text-5xl text-gray-400" />
        )}
      </div>
      <h1 className="w-full font-semibold text-2xl">{name}</h1>
      <Menu
        transition
        menuButton={(
          <MenuButton className="group">
            <BsThreeDotsVertical className="w-6 h-6 text-gray-400 transition group-hover:text-gray-800" />
          </MenuButton>
        )}
      >
        <MenuItem onClick={() => console.log('settings clicked')}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Header
