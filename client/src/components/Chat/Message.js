import mergeClasses from '../../helpers/mergeClasses'

const Message = ({ message }) => {
  const classes = {
    base: 'py-2 px-4 rounded bg-white shadow mb-2 flex relative last:mb-0',
    sender: message.senderId === '321321' ? 'ml-auto' : 'mr-auto'
  }

  return (
    <li className={mergeClasses(classes)}>
      <p className="mr-4">{message.content}</p>
      <p className="text-gray-500 relative top-1">{message.time}</p>
    </li>
  )
}

export default Message
