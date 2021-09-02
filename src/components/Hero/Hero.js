import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Ahmad
      </SectionTitle>
      <SectionText style={{ width: '100%' }}>
        Aspiring web developer on the lookout for a starter position in which I
        can put my passion for building seamless experiences into application
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        learn more?
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
