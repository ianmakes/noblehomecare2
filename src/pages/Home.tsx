import { useState } from 'react';
import { Heart, Users, Clock, Shield, MapPin, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
const Home = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isCareNeedsModalOpen, setIsCareNeedsModalOpen] = useState(false);
  const services = [{
    icon: <Heart className="w-8 h-8 text-healthcare-primary" />,
    title: "Personal Care",
    description: "Bathing, grooming, toileting, and daily living assistance with dignity and respect."
  }, {
    icon: <Users className="w-8 h-8 text-healthcare-secondary" />,
    title: "Companionship",
    description: "Friendly conversation, emotional support, and social engagement activities."
  }, {
    icon: <Clock className="w-8 h-8 text-healthcare-primary" />,
    title: "Around-The-Clock Care",
    description: "24-hour comprehensive care services tailored to your specific needs."
  }, {
    icon: <Shield className="w-8 h-8 text-healthcare-secondary" />,
    title: "Skilled Nursing",
    description: "Professional nursing care by licensed RNs and LPNs for medical conditions."
  }];
  const counties = ['Cobb', 'Paulding', 'Cherokee', 'Fulton', 'Douglas', 'Gwinnett', 'Polk', 'Bartow'];
  const careProcess = [{
    step: "1",
    title: "Care Needs Assessment",
    description: "Complete our quick questionnaire to help us understand your specific care requirements."
  }, {
    step: "2",
    title: "Free Consultation",
    description: "Our care team will contact you within 24 hours to discuss your needs and answer questions."
  }, {
    step: "3",
    title: "Personalized Care Plan",
    description: "We create a custom care plan tailored to your unique situation and preferences."
  }, {
    step: "4",
    title: "Caregiver Matching",
    description: "We match you with qualified, compassionate caregivers who fit your personality and needs."
  }];
  return <div className="min-h-screen">
      {/* Hero Section - Professional & Branded */}
      <section className="relative healthcare-gradient text-white min-h-[85vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-healthcare-gold/10 rounded-full blur-[100px]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Shield size={16} className="text-healthcare-gold" />
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Trusted In-Home Healthcare</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-white">
                  We <span className="text-healthcare-gold italic">Care</span> <br />
                  For You!
                </h1>
                <div className="banner-star-line !justify-start !my-2">
                  <span className="w-6 h-6 text-healthcare-gold">✦</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl font-light">
                At <span className="font-semibold text-white">Noble Homecare Agency</span>, we provide professional medical and personal care services designed to promote dignity, independence, and comfort in your own home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => setIsConsultationModalOpen(true)} className="btn-healthcare-secondary text-lg px-10 py-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
                  Get Free Consultation
                </Button>
                <div className="flex items-center space-x-3 px-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-healthcare-green bg-healthcare-gray-light overflow-hidden shadow-lg">
                        <img src={`https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/${i === 1 ? '6_aphqqg' : i === 2 ? '5_ayx328' : '1_umffyt'}.jpg`} alt="Caregiver" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-healthcare-gold">Joined by 500+</div>
                    <div className="text-white/70">Families in Georgia</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in relative">
              {/* Premium Frame for Slider */}
              <div className="absolute -inset-4 bg-healthcare-gold/20 blur-2xl rounded-[2.5rem] animate-pulse"></div>
              <div className="relative border-4 border-white/10 rounded-[2.2rem] p-2 bg-white/5 backdrop-blur-sm shadow-2xl">
                <HeroSlider />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-bounce-slow hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-healthcare-green rounded-xl flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Satisfaction</div>
                    <div className="text-xl font-bold text-healthcare-green">98.5% Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Banner Inspired Design */}
      <section className="py-12 md:py-16 lg:py-24 banner-wave">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-healthcare-green px-8 py-3 rounded-tr-3xl rounded-bl-3xl border-b-4 border-healthcare-gold mb-6 shadow-xl">
              <h2 className="text-white font-serif uppercase tracking-wider text-xl md:text-2xl m-0">Our Services</h2>
            </div>
            <div className="banner-star-line">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              We are committed to providing you with all the resources you need in order to get back on your feet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
            return <div key={index} className="healthcare-card healthcare-card-gold-border text-center animate-fade-in group hover:-translate-y-2 transition-all duration-500" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-healthcare-gold/10 rounded-full blur-xl group-hover:bg-healthcare-gold/20 transition-colors"></div>
                    <div className="relative p-4 bg-white rounded-full shadow-inner border border-healthcare-gold/20">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-healthcare-green">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light Background */}
      <section className="py-12 md:py-16 bg-healthcare-accent lg:py-[40px]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img src="https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/6_aphqqg.jpg" alt="Healthcare professional providing compassionate care to elderly patient" className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover" />
            </div>
            
            <div>
              <h2 className="text-healthcare-teal font-bold mb-4 md:mb-6">
                Our reputation is built on trust and professionalism
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-healthcare-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">Licensed & Insured</h4>
                    <p className="text-sm md:text-base text-gray-600">All our caregivers are thoroughly vetted, licensed, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-healthcare-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">24/7 Availability</h4>
                    <p className="text-sm md:text-base text-gray-600">Round-the-clock care options from 1-24 hours per day, tailored to your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-healthcare-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">Family-Centered Approach</h4>
                    <p className="text-sm md:text-base text-gray-600">Regular status reports to family members and transparent communication throughout care.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8">
                <Link to="/services">
                  <Button className="btn-healthcare">
                    Learn More About Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Care Services Section - Background Image with Overlay */}
      <section className="py-12 md:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/5 to-healthcare-pink/5"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-healthcare-teal font-bold mb-4 md:mb-6">Comprehensive Care Services</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">Medication Management</h4>
                    <p className="text-sm md:text-base text-gray-600">Professional assistance with medication reminders and administration to ensure proper health management.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">Mobility Assistance</h4>
                    <p className="text-sm md:text-base text-gray-600">Safe support with walking, transfers, and daily mobility to maintain independence and prevent falls.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">Nutritional Support</h4>
                    <p className="text-sm md:text-base text-gray-600">Meal planning, preparation, and dietary guidance to ensure proper nutrition and health.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src="https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/5_ayx328.jpg" alt="Healthcare professional providing medication assistance to elderly patient" className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Care Process - White Background */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-green font-serif font-bold mb-4">Easy Steps To Get Started</h2>
            <div className="banner-star-line">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with Noble Homecare Agency is simple and straightforward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {careProcess.map((process, index) => <div key={index} style={{
            animationDelay: `${index * 0.1}s`
          }} className="text-center animate-fade-in group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-healthcare-green text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-6 border-4 border-healthcare-gold/30 shadow-lg group-hover:scale-110 group-hover:border-healthcare-gold transition-all duration-300">
                  {process.step}
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-healthcare-green">{process.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed px-4">{process.description}</p>
              </div>)}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button onClick={() => setIsCareNeedsModalOpen(true)} className="btn-healthcare text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Start Your Care Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas - Enhanced with White Overlay */}
      <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/2_yastra.jpg')`
      }}>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm py-0"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Areas We Serve</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Noble Homecare Agency proudly serves individuals and families with high-quality, individualized care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {counties.map((county, index) => <div key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 md:p-6 text-center animate-fade-in hover:bg-white/95 transition-all duration-300 shadow-sm" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-healthcare-teal mx-auto mb-2 md:mb-3" />
                <h4 className="font-semibold text-sm md:text-lg text-gray-800">{county} County</h4>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-gradient text-white py-12 md:py-16 lg:py-24">
        <div className="container-custom text-center">
          <h2 className="font-bold mb-4 md:mb-6">
            You get better because<br />
            <span className="text-primary-light">we care better</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
            At Noble Homecare Agency, we provide a wide range of home health care services to clients all throughout our area. Our staff goes above and beyond to make sure you get the best quality care possible, and are committed to providing you with all the resources you need in order to get back on your feet.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
            
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base text-white/80">Client Satisfaction Rate</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/80">Care Available</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button onClick={() => window.open('tel:1-866-756-7374')} className="btn-healthcare-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 flex items-center justify-center space-x-2">
              <Phone size={18} className="md:hidden" />
              <Phone size={20} className="hidden md:block" />
              <span>Call Now: 1-866-756-7374</span>
            </Button>
            <Button onClick={() => setIsConsultationModalOpen(true)} className="btn-healthcare-outline border-white hover:text-healthcare-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white text-[#7eb080]">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modals */}
      <ContactModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} type="consultation" />
      
      <ContactModal isOpen={isCareNeedsModalOpen} onClose={() => setIsCareNeedsModalOpen(false)} type="care-needs" />

      <Footer />
    </div>;
};
export default Home;