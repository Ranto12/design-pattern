import {discord, facebook, github, gmail, instagram, logoWindows, telegram, twitter} from '../../../Assets';
import './Footer.scss';
const Icon =({img})=>{
  return(
      <div className='icon-wrapper'>
        <img className='icons-medsos' src={img} alt="icon"/>
      </div>
  )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
              <img className='logo' src={logoWindows} alt="logo"/>
            </div>
            <div className='social-wrapper'>
              <Icon img={facebook} />
              <Icon img={twitter} />
              <Icon img={instagram} />
              <Icon img={telegram} />
              <Icon img={discord} />
              <Icon img={gmail} />
              <Icon img={github} />
            </div>
        </div>
        <div className='Copyright'>
          Copyright © 2020 Microsoft. All rights reserved.
        </div>
    </div>
  )
}

export default Footer