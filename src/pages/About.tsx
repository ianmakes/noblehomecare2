import { useState, useEffect } from 'react';
import { Heart, Users, Award, Shield, Clock, CheckCircle, Star, Target, Eye, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const About = () => {
  // Mouse interaction state for hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "/lovable-uploads/da2b87a9-d374-4af8-aa31-a98453ea65fa.png",
      description: "Over 15 years of experience in geriatric medicine and home healthcare management."
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      image: "/lovable-uploads/8c0494eb-78a4-4c3a-9b01-dcbf91d3b46e.png",
      description: "Specialist in healthcare operations with a focus on patient-centered care coordination."
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Nursing",
      image: "/lovable-uploads/ea030fec-429e-4901-a84b-b3e41ab539b4.png",
      description: "Licensed RN with expertise in home health services and compassionate patient care."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-healthcare-teal" />,
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy, respect, and genuine concern for our clients' well-being."
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Professional Excellence",
      description: "Our team maintains the highest standards of medical and personal care through continuous training."
    },
    {
      icon: <Users className="w-8 h-8 text-healthcare-teal" />,
      title: "Family-Centered Approach",
      description: "We work closely with families to ensure coordinated care that meets everyone's needs."
    },
    {
      icon: <Clock className="w-8 h-8 text-black" />,
      title: "Reliable Service",
      description: "Dependable care you can count on, available when you need it most, 24/7."
    }
  ];

  const stats = [
    { number: "14,656+", label: "Families Served", icon: <Users className="w-6 h-6 text-healthcare-teal" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6 text-healthcare-teal" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 text-healthcare-teal" /> },
    { number: "24/7", label: "Care Available", icon: <Clock className="w-6 h-6 text-healthcare-teal" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Interactive Background */}
      <section 
        className="relative healthcare-gradient text-white py-12 md:py-16 lg:py-24 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Interactive Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/20 via-transparent to-healthcare-pink/20"></div>
          
          {/* Animated floating orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Interactive cursor followers */}
          {isHovering && (
            <>
              <div 
                className="absolute w-32 h-32 bg-white/3 rounded-full blur-2xl transition-all duration-700 ease-out"
                style={{
                  left: mousePosition.x - 64,
                  top: mousePosition.y - 64,
                  transform: 'translate(-50%, -50%)'
                }}
              />
              <div 
                className="absolute w-20 h-20 bg-healthcare-pink/10 rounded-full blur-xl transition-all duration-1000 ease-out"
                style={{
                  left: mousePosition.x - 40,
                  top: mousePosition.y - 40,
                  transform: 'translate(-30%, -70%)'
                }}
              />
              <div 
                className="absolute w-16 h-16 bg-healthcare-teal/10 rounded-full blur-lg transition-all duration-500 ease-out"
                style={{
                  left: mousePosition.x - 32,
                  top: mousePosition.y - 32,
                  transform: 'translate(-70%, -30%)'
                }}
              />
            </>
          )}
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-2.5 h-2.5 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-healthcare-teal">
                About Premier Healthcare<br />
                <span className="text-white">of Georgia</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed">
                Since 2009, we've been providing exceptional home healthcare services across Georgia, 
                helping families maintain their independence with dignity and compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/services">
                  <Button className="btn-healthcare-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 transform hover:scale-105 transition-all duration-300">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-healthcare-outline border-white hover:text-healthcare-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-slate-50 text-lime-600 transform hover:scale-105 transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-in">
              <img 
                src="/lovable-uploads/da2b87a9-d374-4af8-aa31-a98453ea65fa.png" 
                alt="Premier Healthcare of Georgia team providing compassionate care" 
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - White Background */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Story</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2009 by a team of dedicated healthcare professionals, Premier Healthcare of Georgia was born out of a desire to provide more personalized and compassionate care to families in need.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 md:mb-8">
                We recognized that many individuals thrive best in the comfort and familiarity of their own homes. Our mission became to deliver high-quality, in-home care services that allow our clients to maintain their independence and dignity.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown from a small team to a leading provider of home healthcare in Georgia. But our commitment to our founding principles remains unchanged: to provide compassionate, reliable, and personalized care that makes a positive difference in the lives of our clients and their families.
              </p>
            </div>
            
            <div>
              <img src="/lovable-uploads/3600bcd1-540d-44f8-a44b-51a1dbe8d8af.png" alt="Healthcare professional assisting elderly patient at home" className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Light Background with Subtle Pattern */}
      <section className="py-12 md:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/5 to-healthcare-pink/5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              To provide compassionate, reliable, and personalized home healthcare services that enhance the quality of life for our clients and their families.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center healthcare-card animate-fade-in">
              <Target className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Client-Centered Care</h3>
              <p className="text-sm text-gray-600">We prioritize the unique needs and preferences of each client, ensuring personalized care plans.</p>
            </div>
            
            <div className="text-center healthcare-card animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Eye className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Compassionate Support</h3>
              <p className="text-sm text-gray-600">Our caregivers provide emotional support and companionship, fostering a sense of well-being.</p>
            </div>
            
            <div className="text-center healthcare-card animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Lightbulb className="w-8 h-8 text-healthcare-teal mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Professional Excellence</h3>
              <p className="text-sm text-gray-600">We maintain the highest standards of medical and personal care through continuous training and oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - White Background */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide every action we take, ensuring we deliver the highest standard of care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="healthcare-card text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - Background Image with Overlay */}
      <section className="py-12 md:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/lovable-uploads/50bc45b7-941d-4c39-a1be-1d5da46ba07e.png')`}}>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our team of experienced and compassionate professionals is dedicated to providing the best possible care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="healthcare-card text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section - White Background */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Commitment</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality of care and support to our clients and their families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start space-x-4 animate-fade-in">
              <CheckCircle className="w-6 h-6 text-healthcare-teal flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-base mb-2 text-gray-800">Personalized Care Plans</h4>
                <p className="text-sm text-gray-600">We tailor our care plans to meet the unique needs and preferences of each client.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CheckCircle className="w-6 h-6 text-healthcare-teal flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-base mb-2 text-gray-800">Experienced Caregivers</h4>
                <p className="text-sm text-gray-600">Our caregivers are thoroughly vetted, trained, and dedicated to providing compassionate care.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CheckCircle className="w-6 h-6 text-healthcare-teal flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-base mb-2 text-gray-800">24/7 Availability</h4>
                <p className="text-sm text-gray-600">We are available around the clock to provide care and support when you need it most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Healthcare Gradient Background */}
      <section className="healthcare-gradient text-white py-12 md:py-16 lg:py-24">
        <div className="container-custom text-center">
          <h2 className="font-bold mb-4 md:mb-6">
            Our Dedication in Numbers
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
            We measure our success by the positive impact we have on the lives of our clients and their families.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  {stat.icon}
                  <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                </div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
