import UserCard from "@/components/UserCard"
import React from "react"

const UserPage = async () => {
  const data = await fetch("http://localhost:5000/users")
  const users = await data.json()
  return (
    <div>
      <h1>Total Users:{users.length}</h1>
      <div>
        {users.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UserPage
