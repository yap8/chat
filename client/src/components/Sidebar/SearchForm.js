import { FaSearch, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/actions/searchActions'
import { findUsers } from '../../redux/actions/usersActions'

const SearchForm = () => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setSearchValue(e.target.value))

    dispatch(findUsers(e.target.value))
  }

  const clearForm = () => {
    dispatch(setSearchValue(''))
    dispatch(findUsers(''))
  }

  return (
    <div className="p-4 flex items-center border-b relative">
      <label className="absolute left-7 cursor-text" htmlFor="search">
        <FaSearch className="text-gray-500 text-lg" />
      </label>
      <input
        id="search"
        className="w-full py-2 px-10 rounded bg-gray-200 text-xl text-gray-800"
        type="text"
        placeholder="Search"
        autoComplete="off"
        value={search}
        onChange={handleChange}
      />
      <button
        className={`absolute right-7 group ${search.length ? '' : 'hidden'}`}
        onClick={clearForm}
      >
        <FaTimes className="text-gray-500 text-lg transition group-hover:text-gray-800" />
      </button>
    </div>
  )
}

export default SearchForm
