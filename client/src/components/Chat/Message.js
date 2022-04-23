import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@szhsin/react-menu/dist/index.css'

import { deleteMessage } from '../../redux/actions/messagesActions'
import { getTime } from '../../helpers/dateTime';
import mergeClasses from '../../helpers/mergeClasses';

const Message = ({ message, first }) => {
  const chatId = useSelector(state => state.chat.id)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const classes = {
    base: `py-2 px-4 rounded shadow flex transition hover:bg-gray-200 dark:hover:bg-slate-700`,
    isBeingSent: message.isBeingSent ? 'bg-gray-200 dark:bg-slate-700' : 'bg-white dark:bg-slate-800'
  }

  const time = getTime(message.created_at)

  const myMessage = message.sender_id === user.id

  const handleDelete = () => {
    dispatch(deleteMessage(chatId, message.id))
  }

  return (
    <div className={`relative mb-2 ${myMessage ? ' ml-auto' : ' mr-auto'} ${first && 'mt-auto'}`}>
      <Menu
        transition
        menuButton={(
          <MenuButton className={mergeClasses(classes)}>
            <p className="mr-4 dark:text-white">{message.content}</p>
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
