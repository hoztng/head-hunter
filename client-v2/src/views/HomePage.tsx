import React from 'react';
import HeroSection from '@sections/HeroSection';
import StakeholderSection from '@sections/StakeholderSection';
import AboutSection from '@sections/AboutSection';
import WhyUsSection from '@sections/WhyUsSection';
import ForJobSeekersSction from '@sections/ForJobSeekersSction';
import ForRecruitersSction from '@sections/ForRecruitersSction';
import ContactSection from '@sections/ContactSection';

const HomePage:React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <StakeholderSection/>
      <AboutSection/>
      <WhyUsSection/>
      <ForJobSeekersSction/>
      <ForRecruitersSction/>
      <ContactSection/>
    </div>
  )
}

export default HomePage;