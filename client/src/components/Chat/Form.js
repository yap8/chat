import { sendMessage } from '../../redux/actions/messagesActions'
import { useDispatch, useSelector } from 'react-redux'
// import { ImAttachment } from 'react-icons/im'
import { MdSend } from 'react-icons/md'
import { useState } from 'react'

const Form = () => {
  const chatId = useSelector(state => state.chat.id)
  const userId = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    text: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.text.trim()) return

    dispatch(sendMessage(formData.text, chatId, userId))

    setFormData({
      text: ''
    })
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      className="bg-white flex border-t dark:border-slate-900 shadow"
      onSubmit={handleSubmit}
    >
      {/* <button className="group px-4">
        <ImAttachment className="text-2xl text-gray-400 transition group-hover:text-gray-800" />
      </button> */}
      <input
        className="p-4 w-full text-xl outline-0 dark:bg-slate-800 dark:text-white"
        type="text"
        name="text"
        placeholder="Write a message"
        autoComplete="off"
        value={formData.text}
        onChange={handleChange}
      />
      <button className="group px-4 dark:bg-slate-800">
        <MdSend className="text-3xl text-blue-500 transition group-hover:text-blue-600" />
      </button>
    </form>
  )
}

export default Form
