import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UpdateUserInfo = ({ user }) => {
  const handleUpdateUser = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updateUser = Object.fromEntries(formData.entries())
    console.log(updateUser)
  }
  return (
    <div className="mx-4">
      <Dialog>
        <DialogTrigger render={<Button variant="outline">Edit</Button>} />
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleUpdateUser}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue={user.name} />
              </Field>
              <Field>
                <Label htmlFor="username-1">Email</Label>
                <Input id="username-1" name="email" defaultValue={user.email} />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateUserInfo
