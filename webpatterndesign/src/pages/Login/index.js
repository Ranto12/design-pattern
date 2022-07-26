import { useNavigate } from 'react-router';
import { LogoLogin } from '../../Assets';
import { Button, Gap, Input, Link } from '../../component';
const Login = () => {
  const navigate = useNavigate();
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
        <Button name="Login" onClick={()=> navigate('/')}/>
        <Gap height={100} />
        <Link title="daftar" onClick={()=> navigate('/register')}/>
      </div>
    </div>
  )
}

export default Login