import { useNavigate } from 'react-router';
import { LogoRegister } from '../../Assets';
import { Button, Gap, Input, Link } from '../../component';
import './Register.scss';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LogoRegister} alt='register' className='bg-image' />
      </div>
      <div className='right'>
        <p>Register</p>
        <Input label="Username" placeholder="username"/>
        <Gap height={20} />
        <Input label="Email" placeholder="email" />
        <Gap height={20} />
        <Input label="Password" placeholder="password"/>
        <Gap height={50}  />
        <Button name="Daftar" onClick={()=> navigate('/login')}/>
        <Gap height={100} />
        <Link title="kembali ke login" onClick={()=> navigate('/login')}/>
      </div>
    </div>
  )
}

export default Register