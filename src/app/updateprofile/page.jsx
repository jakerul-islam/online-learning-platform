'use client'
import { ProfileUpdate } from '@/components/ProfileUpdate';
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UpdateProfilePage = () => {
    const onSubmit =async (e)=>{
            e.preventDefault()
            const name = e.target.name.value;
            const image = e.target.image.value;
    
            // console.log({name, image})
    
            await authClient.updateUser({
                name,
                image
            })
        }
    return (
        <div className='mx-auto max-w-2xl space-y-4'>
             <form onSubmit={onSubmit} className="flex flex-col gap-6 shadow-2xl p-6 ">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter your image url" />
                     <Button  type="submit" slot="close">Save</Button>
                  </TextField>
            
               
                 
                </form>
        </div>
    );
};

export default UpdateProfilePage;