import { useSelector } from 'react-redux'
import mergeClasses from '../../helpers/mergeClasses'

const Message = ({ message }) => {
  const user = useSelector(state => state.user)

  const classes = {
    base: 'py-2 px-4 rounded bg-white shadow mb-2 flex relative first:mb-0',
    sender: message.sender_id === user.id ? 'ml-auto' : 'mr-auto'
  }

  const time = message.created_at.split(' ')[1].substring(0, message.created_at.split(' ')[1].length - 3)

  return (
    <li className={mergeClasses(classes)}>
      <p className="mr-4">{message.content}</p>
      <p className="text-gray-500 relative top-1">{time}</p>
    </li>
  )
}

export default Message
