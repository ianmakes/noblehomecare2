import { useState } from 'react';
import { Heart, Users, Clock, Shield, MapPin, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

const Home = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isCareNeedsModalOpen, setIsCareNeedsModalOpen] = useState(false);

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-healthcare-pink" />,
      title: "Personal Care", 
      description: "Bathing, grooming, toileting, and daily living assistance with dignity and respect."
    },
    {
      icon: <Users className="w-8 h-8 text-healthcare-teal" />,
      title: "Companionship",
      description: "Friendly conversation, emotional support, and social engagement activities."
    },
    {
      icon: <Clock className="w-8 h-8 text-healthcare-pink" />,
      title: "Around-The-Clock Care",
      description: "24-hour comprehensive care services tailored to your specific needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-healthcare-teal" />,
      title: "Skilled Nursing",
      description: "Professional nursing care by licensed RNs and LPNs for medical conditions."
    }
  ];

  const counties = [
    'Fayette', 'Fulton', 'Clayton', 'Cobb', 'Coweta',
    'DeKalb', 'Carroll', 'Douglas', 'Gwinnett', 'Henry'
  ];

  const careProcess = [
    {
      step: "1",
      title: "Care Needs Assessment",
      description: "Complete our quick questionnaire to help us understand your specific care requirements."
    },
    {
      step: "2", 
      title: "Free Consultation",
      description: "Our care team will contact you within 24 hours to discuss your needs and answer questions."
    },
    {
      step: "3",
      title: "Personalized Care Plan",
      description: "We create a custom care plan tailored to your unique situation and preferences."
    },
    {
      step: "4",
      title: "Caregiver Matching",
      description: "We match you with qualified, compassionate caregivers who fit your personality and needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Living With Heart,<br />
                <span className="text-pink-200">Loving With Care</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                At Premier Healthcare of Georgia, we provide compassionate, personalized home care services 
                that help you maintain independence and dignity in the comfort of your own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="btn-healthcare-secondary text-lg px-8 py-4"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  onClick={() => setIsCareNeedsModalOpen(true)}
                  className="btn-healthcare-outline bg-white/10 border-white text-white hover:bg-white hover:text-healthcare-teal text-lg px-8 py-4"
                >
                  Assess Care Needs
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the care you enjoy, the peace of mind your family deserves.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="healthcare-card text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/1e91caf8-562b-44e0-b88a-de8b391a9afe.png"
                alt="Healthcare professional providing personalized care to elderly patient"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-healthcare-teal mb-6">
                We believe the heart of healthcare is service to others
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-healthcare-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Licensed & Insured</h4>
                    <p className="text-gray-600">All our caregivers are thoroughly vetted, licensed, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-healthcare-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">24/7 Availability</h4>
                    <p className="text-gray-600">Round-the-clock care options from 1-24 hours per day, tailored to your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-healthcare-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Family-Centered Approach</h4>
                    <p className="text-gray-600">Regular status reports to family members and transparent communication throughout care.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="btn-healthcare"
                >
                  Learn More About Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal mb-4">Easy Steps To Get Private Nursing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with Premier Healthcare of Georgia is simple and straightforward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careProcess.map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-healthcare-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => setIsCareNeedsModalOpen(true)}
              className="btn-healthcare text-lg px-8 py-4"
            >
              Start Your Care Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas - Enhanced */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/50bc45b7-941d-4c39-a1be-1d5da46ba07e.png')`,
          }}
        >
          <div className="absolute inset-0 bg-healthcare-teal/85"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Areas We Serve</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premier Healthcare of Georgia proudly serves families across metro Atlanta and surrounding counties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {counties.map((county, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center animate-fade-in hover:bg-white/20 transition-all duration-300" style={{animationDelay: `${index * 0.05}s`}}>
                <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-lg text-white">{county} County</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-6">
            You get better because<br />
            <span className="text-pink-200">we care better</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our passion is personal, and our care is from the heart. Let us help you maintain your independence 
            while giving your family peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">14,656+</div>
              <div className="text-white/80">Happy Families Served</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction Rate</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Care Available</div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('tel:470-210-7666')}
              className="btn-healthcare-secondary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now: 470-210-7666</span>
            </Button>
            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="btn-healthcare-outline bg-white/10 border-white text-white hover:bg-white hover:text-healthcare-teal text-lg px-8 py-4"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modals */}
      <ContactModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        type="consultation"
      />
      
      <ContactModal 
        isOpen={isCareNeedsModalOpen}
        onClose={() => setIsCareNeedsModalOpen(false)}
        type="care-needs"
      />

      <Footer />
    </div>
  );
};

export default Home;
