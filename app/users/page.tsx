import React from "react"

const UserPage = async () => {
  const data = await fetch("http://localhost:5000/users")
  const users = await data.json()
  return (
    <div>
      <h1>Total Users:{users.length}</h1>
    </div>
  )
}

export default UserPage
