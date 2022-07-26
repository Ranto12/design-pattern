import { LogoLogin } from '../../Assets';
import { Button, Gap, Input, Link } from '../../component';
const Login = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LogoLogin} alt='register' className='bg-image' />
      </div>
      <div className='right'>
        <p>Login</p>
        <Input label="Username" placeholder="username"/>
        <Gap height={20} />
        <Input label="Password" placeholder="password"/>
        <Gap height={50}  />
        <Button name="Login"/>
        <Gap height={100} />
        <Link title="daftar" />
      </div>
    </div>
  )
}

export default Login