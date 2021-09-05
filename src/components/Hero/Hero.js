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
      <SectionText style={{ width: '700px' }}>
        Aspiring web developer on the lookout for a starter position in which I
        can put my passion for building seamless experiences into application
        while learning and growing
        <br />
        <SectionTitle style={{ fontSize: '1.5rem' }}>
          motto: do it with passion or not at all{' '}
        </SectionTitle>
      </SectionText>
      <Button
        target='_blank'
        onClick={() =>
          (window.location =
            'https://docs.google.com/presentation/d/1qbSAAHeFpKL9SXeSNA8Wc8BR6har-1OFzQ9qVkAQNfA/edit?usp=sharing')
        }
      >
        download my CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
