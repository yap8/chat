import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import Message from './Message'
import { fetchMessages } from "../../redux/actions/messagesActions"

const MessagesList = () => {
  const messages = useSelector(state => state.messages)
  const { id } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMessages(id))
  }, [dispatch, id])

  return (
    <ul className="p-4 flex flex-col-reverse justify-endl overflow-auto">
      {messages.map(message => <Message message={message} />)}
    </ul>
  )
}

export default MessagesList
