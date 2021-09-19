import React from 'react';
// import CV from '../../constants/CV.pdf';
// import { Button } from 'react-bootstrap';
import { GrDocumentPdf } from 'react-icons/gr';
import { GrDocumentDownload } from 'react-icons/gr';
import { BsNewspaper } from 'react-icons/bs';
import { IoDocumentText } from 'react-icons/io5';
import blobButton from '../blobButton';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Ahmad
      </SectionTitle>
      <SectionText style={{ width: '700px', paddingBottom: '0' }}>
        Passionate and curious Web developer on the lookout for a junior
        position in which I can learn and grow my skills.
        <br />
        <SectionTitle style={{ fontSize: '1.5rem' }}>
          motto: do it with passion or not at all{' '}
        </SectionTitle>
      </SectionText>
      {/* <a href={CV} download='Ahmad_CV.pdf'>
        <Button>download my CV</Button>{' '}
      </a> */}
      <form
        action='https://docs.google.com/presentation/d/1qbSAAHeFpKL9SXeSNA8Wc8BR6har-1OFzQ9qVkAQNfA/edit?usp=sharing'
        method='get'
        target='_blank'
      >
        <blobButton />
        <button className='offset' type='submit'>
          download my CV{' '}
          <IoDocumentText
            className='pdf-icon'
            size={20}
            style={{ marginLeft: '5px' }}
          />
        </button>
      </form>
    </LeftSection>
  </Section>
);

export default Hero;
