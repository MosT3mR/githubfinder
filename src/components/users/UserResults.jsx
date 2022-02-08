import {useEffect, useState} from "react"

function UserResults() {
 const [users, setUsers] = useState([])
 const [lodaing, setLoading] = useState(true)

 useEffect(() => {
  fetchUsers()
 },[])

 const fetchUsers = async () => {
  const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
   headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
   }
  })
  const data = await res.json()

  setUsers(data)
  setLoading(false)
 }

  if(lodaing) {
   return <h1>Loading ... </h1>
  }
  return (
  <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
   {users.map(user => <h3 key={user.id}>{user.login}</h3>)}
  </div>
  )
}

export default UserResults
