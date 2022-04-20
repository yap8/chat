// import { ImAttachment } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { MdSend } from 'react-icons/md'
import { useState } from 'react'

const Form = () => {
  // const dispatch = useDispatch
  const [formData, setFormData] = useState({
    text: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    // dispatch(sendMessage())
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      className="bg-white flex shadow"
      onSubmit={handleSubmit}
    >
      {/* <button className="group px-4">
        <ImAttachment className="text-2xl text-gray-400 transition group-hover:text-gray-800" />
      </button> */}
      <input
        className="p-4 w-full text-xl outline-0"
        type="text"
        name="text"
        placeholder="Write a message"
        value={formData.text}
        onChange={handleChange}
      />
      <button className="group px-4">
        <MdSend className="text-2xl text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </form>
  )
}

export default Form
