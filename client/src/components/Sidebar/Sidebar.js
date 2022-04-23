import Header from "./Header"
import SearchForm from "./SearchForm"
import ChatList from "./ChatList"

const Sidebar = () => {
  return (
    <div className="h-screen lg:w-1/4 flex flex-col justify-between bg-white border-r shadow dark:bg-slate-800 dark:border-slate-900">
      <Header />
      <SearchForm />
      <ChatList />
    </div>
  )
}

export default Sidebar
