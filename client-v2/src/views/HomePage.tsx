import React from 'react';
import Button from '@common/components/Buttons/Button';
import HeroSection from '@sections/HeroSection';
import StakeholderSection from '@sections/StakeholderSection';
import AboutSection from '@sections/AboutSection';
import WhyUsSection from '@sections/WhyUsSection';
import ForJobSeekersSction from '@sections/ForJobSeekersSction';
import ForRecruitersSction from '@sections/ForRecruitersSction';
import ContactSection from '@sections/ContactSection';
import Footer from '@layout/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <StakeholderSection/>
      <AboutSection/>
      <WhyUsSection/>
      <ForJobSeekersSction/>
      <ForRecruitersSction/>
      <ContactSection/>
      {/* <Button size="small" variant="primary">Small Primary Button</Button>
      <Button size="medium" variant="secondary">Medium Secondary Button</Button> */}
    </div>
  )
}

export default HomePage;