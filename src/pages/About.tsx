
import { Heart, Users, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-healthcare-pink" />,
      title: "Compassionate Care",
      description: "Every client is treated like family, with dignity, respect, and genuine care."
    },
    {
      icon: <Shield className="w-12 h-12 text-healthcare-teal" />,
      title: "Trust & Safety",
      description: "Rigorous background checks, licensing, and insurance for complete peace of mind."
    },
    {
      icon: <Users className="w-12 h-12 text-healthcare-pink" />,
      title: "Family-Centered",
      description: "We understand the importance of family involvement in the care process."
    },
    {
      icon: <Award className="w-12 h-12 text-healthcare-teal" />,
      title: "Excellence",
      description: "Committed to providing the highest quality of care and service standards."
    }
  ];

  const teamMembers = [
    {
      role: "Certified Nursing Assistants (CNAs)",
      description: "Trained professionals providing hands-on personal care and daily living assistance."
    },
    {
      role: "Personal Care Assistants (PCAs)", 
      description: "Compassionate caregivers focused on maintaining client independence and comfort."
    },
    {
      role: "Companions & Sitters",
      description: "Friendly, engaging companions providing social interaction and emotional support."
    },
    {
      role: "Skilled Nursing Staff (RNs/LPNs)",
      description: "Licensed nurses providing medical care and health monitoring services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Story Begins With<br />
                <span className="text-pink-200">Family</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Founded on the belief that everyone deserves compassionate, personalized care, 
                Premier Healthcare of Georgia was born from a deeply personal experience of caring for family.
              </p>
            </div>
            <div className="animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional with elderly patient showing care and compassion"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                alt="Multi-generational family showing love and care"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-healthcare-teal mb-6">The Heart of Our Company</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The heart of our company was born out of family. When my grandmother needed care, 
                  I saw firsthand how important it is to have compassionate, reliable, and personalized 
                  support at home. Entrusting someone to care for her showed me that true home care 
                  goes beyond daily tasks—it's about dignity, trust, and creating comfort for both 
                  the client and their family.
                </p>
                <p>
                  Inspired by her journey, I founded Premier Healthcare of Georgia with the mission 
                  to provide the same level of care, respect, and attentiveness to others that I 
                  wanted for my own loved one. Every client we serve is treated like family, 
                  because we know what it means to entrust someone with the care of those you love most.
                </p>
                <div className="bg-healthcare-teal-light/10 p-6 rounded-lg border-l-4 border-healthcare-teal">
                  <p className="font-medium text-healthcare-teal italic">
                    "At Premier Healthcare of Georgia, our passion is personal—and our care is from the heart."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing exceptional care that makes a real difference in the lives 
              of our clients and their families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="healthcare-card text-center">
              <Shield className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safe, High-Quality Care</h3>
              <p className="text-gray-600">
                Providing safe, high-quality, and compassionate care that meets the highest standards 
                of healthcare excellence.
              </p>
            </div>
            
            <div className="healthcare-card text-center">
              <Users className="w-12 h-12 text-healthcare-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Supporting Independence</h3>
              <p className="text-gray-600">
                Supporting independence while ensuring peace of mind for families through 
                comprehensive care planning and communication.
              </p>
            </div>
            
            <div className="healthcare-card text-center">
              <Heart className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Building Trust</h3>
              <p className="text-gray-600">
                Building trust through respect, kindness, and professionalism in every 
                interaction with our clients and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and every decision we make in serving our clients and their families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="healthcare-card text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Care Team */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal mb-4">Our Professional Care Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of healthcare professionals brings expertise, compassion, and dedication 
              to every client we serve.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                alt="Diverse healthcare team showing professionalism and care"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-healthcare-teal">{member.role}</h4>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-healthcare-teal mb-4">
                Rigorous Screening & Training
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Every member of our care team undergoes comprehensive background checks, drug screening, 
                reference verification, and ongoing training to ensure they meet our high standards of 
                care and professionalism.
              </p>
              <Button className="btn-healthcare">
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Experience Compassionate Care?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let us show you how our family-centered approach to healthcare can make a difference 
            in your life or the life of your loved one.
          </p>
          <Button className="btn-healthcare-secondary text-lg px-8 py-4">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
