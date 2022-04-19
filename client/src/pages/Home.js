import usePrivateRoute from "../hooks/usePrivateRoute"

const Home = () => {
  usePrivateRoute()

  return (
    <div>Home</div>
  )
}

export default Home
