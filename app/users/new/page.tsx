"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { assert } from "console"
import { redirect } from "next/navigation"


const InputPage = () => {
  const handleAddNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)

    //data sending to server:
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    console.log("Response from server", response)
    const afterSubmit = await response.json()
    console.log("After submit", afterSubmit)
    
    if (afterSubmit.insertedId) {
      console.log("user added successfully")
      redirect("/users")
    }
  }

  return (
    <div>
      <form onSubmit={handleAddNewUser}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default InputPage
