import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import Message from './Message'
import { fetchMessages } from "../../redux/actions/messagesActions"
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
    <div className="overflow-hidden">
      <SimpleBarReact
        className="h-full"
        direction='rtl'
      >
        <div className="p-4 flex flex-col">
          {messages.map(message => <Message key={message.id} message={message} />)}
        </div>
        <div ref={messagesEndRef} />
      </SimpleBarReact>
    </div>
  )
}

export default MessagesList
