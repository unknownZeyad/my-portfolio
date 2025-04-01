import { Button } from '@/core/client/components/ui/button'
import { Input } from '@/core/client/components/ui/input'
import { Label } from '@/core/client/components/ui/label'
import { loginAction } from '@/core/server/actions'

function LoginForm() {
  return (
    <section className="h-screen flex items-center justify-center">
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
    </section>
  )
}

export default LoginForm