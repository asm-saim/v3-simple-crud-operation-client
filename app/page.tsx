import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PenLine, Search, UserPlus } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: UserPlus,
    title: "Create users",
    description: "Add new users with a simple form at /users/new.",
  },
  {
    icon: Search,
    title: "Browse users",
    description: "See every user and open a card for full details.",
  },
  {
    icon: PenLine,
    title: "Update & delete",
    description: "Edit profiles or remove users, with instant refresh.",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            User Manager
          </h1>
          <p className="max-w-md text-sm leading-loose text-muted-foreground">
            A simple CRUD client for managing users — create, browse, edit, and
            delete, all on top of a MongoDB-backed API.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/users">
            <Button size="lg">View Users</Button>
          </Link>
          <Link href="/users/new">
            <Button size="lg" variant="outline">
              Add a User
            </Button>
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="size-5" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
