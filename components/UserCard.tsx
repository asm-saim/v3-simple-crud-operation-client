"use client"
import { useRouter } from "next/navigation"

interface IUser {
  _id: string
  name: string
  email: string
}

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import UpdateUserInfo from "./UpdateUserInfo"

const UserCard = ({ user }: { user: IUser }) => {
  const { _id } = user
  const router = useRouter()

  const handleRemove = async (id) => {
    console.log("Removed id is", _id)

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
    const afterDelete = await res.json()
    console.log("deleted use is ", afterDelete)
    if (afterDelete.deletedCount > 0) {
      console.log("User deleted successfully")
      router.refresh()
    }
  }

  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <CardHeader>
          <CardAction>
            {/* <Badge variant="secondary">Featured</Badge> */}
          </CardAction>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/users/${user._id}`}>
            <Button className="w-full cursor-pointer">View Details</Button>
          </Link>
          <UpdateUserInfo user={user}></UpdateUserInfo>
          <Button onClick={() => handleRemove(_id)} variant="destructive">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
