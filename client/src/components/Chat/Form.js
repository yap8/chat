import { ImAttachment } from 'react-icons/im'
import { MdSend } from 'react-icons/md'

const Form = () => {
  return (
    <form className="bg-white flex shadow">
      <button className="group px-4">
        <ImAttachment className="text-2xl text-gray-400 transition group-hover:text-gray-800" />
      </button>
      <input
        className="p-4 w-full text-xl outline-0"
        type="text"
        placeholder="Write a message"
      />
      <button className="group px-4">
        <MdSend className="text-2xl text-gray-400 transition group-hover:text-gray-800" />
      </button>
    </form>
  )
}

export default Form
