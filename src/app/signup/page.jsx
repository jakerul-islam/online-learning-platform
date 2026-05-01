"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    console.log(userData, "user data");

    const { data, error } = await authClient.signUp.email({
      ...userData,
    });

    if (data) {
         toast.success("Sign Up successfully🙂");
         redirect('/signin')
       }else{
           toast.error('signUp Error 😓'+error.message)
       }

    console.log(data, error);
   
  };
   const googleSignInHandle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
}

  
  
  return (
    <div className="flex justify-center items-center flex-col container mx-auto">
      <h2 className="font-bold text-2xl my-4">Sign Up here</h2>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="enter your name" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="enter your valid email" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image Url</Label>
          <Input placeholder="Enter your image url" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
           Sign Up
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
         <p>already have an account?<Link href={`/signin`} className="text-blue-400 underline">SignIn</Link> </p>
      </Form>

      <div className="my-5">
        <Button onClick={googleSignInHandle}>signUp with google</Button>
      </div>

    </div>
  );
};

export default SignUpPage;
