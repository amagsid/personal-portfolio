import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle> Call</LinkTitle>
          <LinkItem href='tel:0640514046'>0640514046 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>e-mail</LinkTitle>
          <LinkItem href='mailto:amagsid@gmail.com'>amagsid@gmail.com</LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer></CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
