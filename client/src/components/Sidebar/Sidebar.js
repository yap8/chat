import Header from "./Header"
import SearchForm from "./SearchForm"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen p-4">
      <Header />
      <SearchForm />
      <Chats />
    </div>
  )
}

export default Sidebar
