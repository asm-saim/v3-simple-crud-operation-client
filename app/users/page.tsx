import UserCard from "@/components/UserCard"
import React from "react"

const UserPage = async () => {
  const data = await fetch("http://localhost:5000/users")
  const users = await data.json()
  return (
    <div>
      <h1>Total Users:{users.length}</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UserPage
