import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const SearchForm = () => {
  const [formData, setFormData] = useState('')

  const handleChange = e => {
    setFormData(e.target.value)
  }

  const clearForm = () => setFormData('')

  return (
    <div className="py-4 flex items-center relative">
      <label className="absolute left-3 cursor-text" htmlFor="search">
        <FaSearch className="text-gray-500 text-lg" />
      </label>
      <input
        id="search"
        className="w-full py-2 px-10 rounded bg-gray-200 text-xl text-gray-800"
        type="text"
        placeholder="Search or start new chat"
        value={formData}
        onChange={handleChange}
      />
      <button
        className={`absolute right-3 group ${formData.length ? '' : 'hidden'}`}
        onClick={clearForm}
      >
        <FaTimes className="text-gray-500 text-lg transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default SearchForm
