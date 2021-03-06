import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Logo from '../../../public/images/logo-white.png';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <img src={Logo} alt='logo' className='my-logo' />
          {/* <DiCssdeck size='3rem' /> <Span> Portfolio</Span> */}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/amagsid' target='_blank'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/ahmad-m-s/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem'></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/isahmad_true' target='_blank'>
        <AiFillTwitterCircle size='3rem'></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
