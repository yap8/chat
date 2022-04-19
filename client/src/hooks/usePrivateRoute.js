import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const usePrivateRoute = (redirect = '/login') => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate(redirect)
  }, [navigate, user, redirect])
}

export default usePrivateRoute
