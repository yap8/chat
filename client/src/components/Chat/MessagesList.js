import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import Message from './Message'
import { fetchMessages } from "../../redux/actions/messagesActions"
import Spinner from "../Spinner"

const MessagesList = () => {
  const messages = useSelector(state => state.messages)
  const { id } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMessages(id))
  }, [dispatch, id])

  if (!messages) return (
    <div className="h-full flex items-center justify-center">
      <Spinner className="text-4xl" />
    </div>
  )

  return (
    <ul className="h-full p-4 flex flex-col-reverse items-end overflow-auto">
      {messages.reverse().map(message => <Message key={message.id} message={message} />)}
    </ul>
  )
}

export default MessagesList
