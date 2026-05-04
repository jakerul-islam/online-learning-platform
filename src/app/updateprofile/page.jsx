

'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, TextField } from '@heroui/react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const UpdateProfilePage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            await authClient.updateUser({
                name,
                image
            });

            toast.success("Profile updated successfully ✅");

            
            setTimeout(() => {
                router.push('/');
            }, 1000);

        } catch (error) {
            toast.error("Update failed ❌");
        }
    };

    return (
        <div className='mx-auto max-w-2xl space-y-4'>
            <form onSubmit={onSubmit} className="flex flex-col gap-6 shadow-2xl p-6">
                
                <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>

                <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter your image url" />
                </TextField>

                <Button className='w-full' type="submit">
                    Update Profile Information
                </Button>

            </form>
        </div>
    );
};

export default UpdateProfilePage;