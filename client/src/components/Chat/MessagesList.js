import { useDispatch, useSelector } from "react-redux"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { useEffect, useRef } from "react"

import { fetchMessages } from "../../redux/actions/messagesActions"
import Message from './Message'
import Spinner from "../Spinner"

const MessagesList = () => {
  const messages = useSelector(state => state.messages)
  const { id } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const messagesEndRef = useRef(null)

  useEffect(() => {
    dispatch(fetchMessages(id))
  }, [dispatch, id])

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView()
  }, [messages])

  if (!messages) return (
    <div className="h-full flex items-center justify-center">
      <Spinner className="text-4xl" />
    </div>
  )

  return (
    <PerfectScrollbar className="h-full pt-4 pb-2 px-4 flex flex-col">
      {messages.map((message, index) => <Message key={message.id} first={index === 0} message={message} />)}
      <div ref={messagesEndRef} />
    </PerfectScrollbar>
  )
}

export default MessagesList
