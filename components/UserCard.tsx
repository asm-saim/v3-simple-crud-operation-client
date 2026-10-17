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

const UserCard = ({ user }) => {
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
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
