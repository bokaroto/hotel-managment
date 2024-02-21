import HeaderSection from '@/sections/header/HeaderSection';
import MostPopularCoursesSection from '@/sections/most-popular-courses/MostPopularCoursesSection';
import OurTeachersSection from '@/sections/our-teachers/OurTeachersSection';
import ExperianceSection from '@/sections/experiance/ExperianceSection';
import HowItWorksSection from '@/sections/how-it-works/HowItWorksSection';
import BePartOfSection from '@/sections/be-part-of/BePartOfSection';
import FrequentlyQuestionsSection from '@/sections/freq-questions/FrequentlyQuestionsSection';
import BecomeMemberSection from '@/sections/become-member/BecomeMemberSection';
import FooterSection from '@/sections/footer/FooterSection';

function HomePage() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <HeaderSection />
      <MostPopularCoursesSection />
      <OurTeachersSection />
      <ExperianceSection />
      <HowItWorksSection />
      <BePartOfSection />
      <FrequentlyQuestionsSection />
      <BecomeMemberSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;
