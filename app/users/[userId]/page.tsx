import React from "react"

const UserDetailPage = async ({ params }) => {
  const { userId } = await params

  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const user = await res.json()
  return (
    <div className="rounded-xl border border-b-blue-700 p-5">
      <h1>Usr detail: {userId}</h1>
      <p>Name:{user.name}</p>
      <p>Name:{user.email}</p>
    </div>
  )
}

export default UserDetailPage
