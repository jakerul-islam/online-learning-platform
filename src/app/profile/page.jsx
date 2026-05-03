import { ProfileUpdate } from "@/components/ProfileUpdate";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
  // const { data: session } = await authClient.getSession()
  // const user = session?.user
  // console.log(user , 'from profile')

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user, "from profile");

  return (
    <Card className="flex justify-center items-center border">
      {/* Image */}
      <div className=" ">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-2xl">{user?.name}</h2>
        <p className="text-gray-500 ">{user?.email}</p>
      </div>

      {/* <ProfileUpdate /> */}
      <Link href={'/updateprofile'}><Button>Update Profile</Button></Link>
    </Card>
  );
};

export default ProfilePage;
