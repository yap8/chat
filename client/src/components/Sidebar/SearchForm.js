import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  const [formData, setFormData] = useState('')

  const handleChange = e => {
    setFormData(e.target.value)
  }

  return (
    <div className="py-4 flex items-center">
      <label className="absolute left-7" htmlFor="search">
        <FaSearch className="text-gray-500" />
      </label>
      <input
        id="search"
        className="w-full py-2 pl-10 pr-4 rounded bg-gray-200 text-xl text-gray-800"
        type="text"
        placeholder="Search or start new chat"
        value={formData}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchForm
