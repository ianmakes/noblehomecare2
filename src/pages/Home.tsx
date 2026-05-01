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
      <section className="relative healthcare-gradient text-white min-h-[60vh] md:min-h-[85vh] flex items-center pt-32 pb-8 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
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
              
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-white">
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
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                <Button onClick={() => setIsConsultationModalOpen(true)} className="btn-healthcare-secondary text-lg px-8 py-4 md:px-10 md:py-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
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
                    <div className="font-bold text-healthcare-gold">Trusted by 500+</div>
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

      {/* Services Overview - Modern & Clean */}
      <section className="section-padding bg-healthcare-green/[0.02] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-healthcare-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-healthcare-green/10 text-healthcare-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 md:mb-4 border border-healthcare-green/20">
                Premium Care
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-healthcare-green mb-2 md:mb-4">
                Our Specialized <span className="text-healthcare-gold">Services</span>
              </h2>
              <div className="banner-star-line !justify-start !my-2">
                <span className="w-6 h-6 text-healthcare-gold">✦</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-md font-medium text-lg leading-relaxed">
              We are committed to providing you with all the resources you need in order to get back on your feet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-healthcare-green/5 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-healthcare-green group-hover:text-white transition-all duration-500 border border-healthcare-green/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-healthcare-green group-hover:text-healthcare-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-healthcare-gold font-bold text-sm cursor-pointer group-hover:translate-x-2 transition-transform">
                  Learn More <CheckCircle size={14} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Elegant & Authoritative */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in">
              <div className="absolute -inset-4 bg-healthcare-gold/5 rounded-3xl -rotate-2"></div>
              <img src="https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/6_aphqqg.jpg" alt="Compassionate Care" className="relative rounded-2xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover border-4 md:border-8 border-white" />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-healthcare-green text-white p-4 md:p-8 rounded-2xl shadow-2xl hidden sm:block border-b-4 md:border-b-8 border-healthcare-gold">
                <div className="text-2xl md:text-4xl font-bold mb-1">10+</div>
                <div className="text-[10px] md:text-sm font-medium text-white/80 uppercase tracking-widest">Years of Excellence</div>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-healthcare-green mb-4 md:mb-6 leading-tight">
                  Your Trusted Partner <br />
                  <span className="text-healthcare-gold italic">in Professional Care</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our reputation is built on trust and professionalism. We believe that receiving care in the comfort of one’s home promotes dignity, independence, and emotional well-being.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Licensed & Insured",
                    desc: "All our caregivers are thoroughly vetted, licensed, and insured for your peace of mind.",
                    color: "bg-healthcare-green"
                  },
                  {
                    title: "24/7 Availability",
                    desc: "Round-the-clock care options from 1-24 hours per day, tailored to your schedule.",
                    color: "bg-healthcare-gold"
                  },
                  {
                    title: "Family-Centered Approach",
                    desc: "Regular status reports to family members and transparent communication throughout care.",
                    color: "bg-healthcare-green"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5 group">
                    <div className={`mt-1 w-6 h-6 ${item.color} rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-lg`}>
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-healthcare-green mb-2 group-hover:text-healthcare-gold transition-colors">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link to="/services">
                  <Button className="btn-healthcare text-lg px-8 py-6 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    Explore Our Service Range
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Services - Soft Gradient Background */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-healthcare-green/5 to-white">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-healthcare-green/5 rounded-full blur-3xl -translate-x-1/2"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-healthcare-gold/10 text-healthcare-gold px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-healthcare-gold/20">
                Holistic Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-healthcare-green mb-8 leading-[1.2]">
                Comprehensive Care <br />
                <span className="text-healthcare-gold">Beyond Basics</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Medication Management",
                    desc: "Professional assistance with medication reminders and administration to ensure proper health management."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Mobility Assistance",
                    desc: "Safe support with walking, transfers, and daily mobility to maintain independence and prevent falls."
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Nutritional Support",
                    desc: "Meal planning, preparation, and dietary guidance to ensure proper nutrition and health."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5 group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-healthcare-green group-hover:bg-healthcare-green group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-healthcare-green mb-2 group-hover:text-healthcare-gold transition-colors">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-healthcare-green/5 rounded-3xl rotate-2"></div>
                <img src="https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/5_ayx328.jpg" alt="Comprehensive Care" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Process - Connected Steps Design */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-healthcare-green mb-4 md:mb-6">Easy Steps To Get Started</h2>
            <div className="banner-star-line">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Getting started with <span className="text-healthcare-green font-semibold">Noble Homecare Agency</span> is simple and straightforward.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {careProcess.map((process, index) => (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative mb-4 md:mb-8 inline-block">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-healthcare-gold text-healthcare-green rounded-full flex items-center justify-center text-2xl md:text-3xl font-serif font-bold mx-auto shadow-xl group-hover:bg-healthcare-green group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-4 text-healthcare-green group-hover:text-healthcare-gold transition-colors">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-20">
            <Button onClick={() => setIsCareNeedsModalOpen(true)} className="btn-healthcare text-lg md:text-xl px-10 py-6 md:px-12 md:py-8 rounded-2xl shadow-2xl hover:shadow-healthcare-green/20">
              Start Your Care Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas - Elegant Glass Design */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed scale-110" style={{
          backgroundImage: `url('https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/2_yastra.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-healthcare-green/90 backdrop-blur-sm"></div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="text-center mb-16">
            <div className="inline-block bg-healthcare-gold/20 text-healthcare-gold px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-healthcare-gold/30">
              Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Areas We Proudly <span className="text-healthcare-gold italic">Serve</span></h2>
            <div className="banner-star-line !justify-center !my-4 opacity-50">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              We bring professional care directly to your doorstep across these counties.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {counties.map((county, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center animate-fade-in hover:bg-white/20 transition-all duration-500 group" style={{ animationDelay: `${index * 0.05}s` }}>
                <MapPin className="w-8 h-8 text-healthcare-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg text-white group-hover:text-healthcare-gold transition-colors">{county} County</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - High Impact & Warm */}
      <section className="section-padding bg-healthcare-green relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-healthcare-gold/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 md:w-20 md:h-20 bg-healthcare-gold rounded-full flex items-center justify-center text-white mb-6 md:mb-8 shadow-2xl animate-bounce-slow">
            <Heart size={32} className="md:w-10 md:h-10" />
          </div>
          
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
            You get better because<br />
            <span className="text-healthcare-gold italic">we care better</span>
          </h2>
          
          <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the difference of professional, compassionate care that treats you like family. Our staff goes above and beyond to ensure you have the resources needed to recover and thrive.
          </p>
          
          <div className="grid grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-6xl font-bold text-white mb-1 md:mb-2">98.5%</div>
              <div className="text-healthcare-gold font-bold uppercase tracking-widest text-[10px] md:text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-6xl font-bold text-white mb-1 md:mb-2">24/7</div>
              <div className="text-healthcare-gold font-bold uppercase tracking-widest text-[10px] md:text-sm">Available</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
            <Button onClick={() => window.open('tel:1-866-756-7374')} className="btn-healthcare-secondary text-lg md:text-xl px-8 py-5 md:px-12 md:py-8 rounded-xl md:rounded-2xl hover:scale-105 transition-transform flex items-center justify-center space-x-3">
              <Phone size={20} className="md:w-6 md:h-6" />
              <span>Call 1-866-756-7374</span>
            </Button>
            <Button onClick={() => setIsConsultationModalOpen(true)} className="bg-white text-healthcare-green hover:bg-gray-50 text-lg md:text-xl px-8 py-5 md:px-12 md:py-8 rounded-xl md:rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl">
              Free Consultation
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