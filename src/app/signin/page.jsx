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
import { toast } from "react-toastify";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    console.log(userData, "user data");

    const { data, error } = await authClient.signIn.email({
      ...userData,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Sign In successfully🙂");
    } else {
      toast.error("signIn Error 😓" + error.message);
    }
    console.log(data, error);
  };

  const googleSignInHandle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Login here</h2>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
           Sign In 
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>

        <p>
          Don't have a account?
          <Link href={`/signup`} className="text-blue-400 underline">
            Register
          </Link>{" "}
        </p>
      </Form>

      <div className="my-5">
        <Button onClick={googleSignInHandle}>signIn with google</Button>
      </div>
    </div>
  );
};

export default SignInPage;
