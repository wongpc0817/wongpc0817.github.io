import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JS mastery to help developers to master their web dev skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;