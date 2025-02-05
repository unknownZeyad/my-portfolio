import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginAction } from '@/core/server/actions'
import React from 'react'

async function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className='flex flex-col gap-4 w-[400px]' action={loginAction}>
        <h1 className='font-primary text-3xl text-center'>Login</h1>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            placeholder='Email'
            className='mt-2'
            required
          />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='Password'
            className='mt-2'
            required
          />
        </div>
        
        <Button variant="secondary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default LoginPage