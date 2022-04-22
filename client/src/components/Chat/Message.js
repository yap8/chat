import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/index.css'

import { deleteMessage } from '../../redux/actions/messagesActions'
import { getTime } from '../../helpers/dateTime';

const Message = ({ message }) => {
  const chatId = useSelector(state => state.chat.id)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const time = getTime(message.created_at)

  const myMessage = message.sender_id === user.id

  const handleDelete = () => {
    dispatch(deleteMessage(chatId, message.id))
  }

  return (
    <div className={`relative mb-2 last:mb-0 ${myMessage ? ' ml-auto' : ' mr-auto'}`}>
      <Menu
        transition
        menuButton={(
          <MenuButton className="py-2 px-4 rounded bg-white shadow flex transition hover:bg-gray-200">
            <p className="mr-4">{message.content}</p>
            <p className="text-gray-500 relative top-1">{time}</p>
          </MenuButton>
        )}
      >
        <CopyToClipboard text={message.content}>
          <MenuItem
            className="py-2 px-6"
          >Copy</MenuItem>
        </CopyToClipboard>
        {myMessage && (
          <MenuItem
            className="py-2 px-6"
            onClick={handleDelete}
          >Delete</MenuItem>
        )}
      </Menu>
    </div>
  )
}

export default Message
