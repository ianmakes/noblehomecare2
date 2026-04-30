import { Heart, Users, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
const About = () => {
  const values = [{
    icon: <Heart className="w-12 h-12 text-healthcare-primary" />,
    title: "Compassionate Care",
    description: "Every client is treated like family, with dignity, respect, and genuine care."
  }, {
    icon: <Shield className="w-12 h-12 text-healthcare-secondary" />,
    title: "Trust & Safety",
    description: "Rigorous background checks, licensing, and insurance for complete peace of mind."
  }, {
    icon: <Users className="w-12 h-12 text-healthcare-primary" />,
    title: "Family-Centered",
    description: "We understand the importance of family involvement in the care process."
  }, {
    icon: <Award className="w-12 h-12 text-healthcare-secondary" />,
    title: "Excellence",
    description: "Committed to providing the highest quality of care and service standards."
  }];
  const teamMembers = [{
    role: "Certified Nursing Assistants (CNAs)",
    description: "Trained professionals providing hands-on personal care and daily living assistance."
  }, {
    role: "Personal Care Assistants (PCAs)",
    description: "Compassionate caregivers focused on maintaining client independence and comfort."
  }, {
    role: "Companions & Sitters",
    description: "Friendly, engaging companions providing social interaction and emotional support."
  }, {
    role: "Skilled Nursing Staff (RNs/LPNs)",
    description: "Licensed nurses providing medical care and health monitoring services."
  }];

  // Alternating commitment card colors
  const commitmentCards = [{
    icon: <Shield className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />,
    title: "Safe, High-Quality Care",
    description: "Providing safe, high-quality, and compassionate care that meets the highest standards of healthcare excellence."
  }, {
    icon: <Users className="w-12 h-12 text-gray-800 mx-auto mb-4" />,
    title: "Supporting Independence",
    description: "Supporting independence while ensuring peace of mind for families through comprehensive care planning and communication."
  }, {
    icon: <Heart className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />,
    title: "Building Trust",
    description: "Building trust through respect, kindness, and professionalism in every interaction with our clients and their families."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Story Begins With<br />
                <span className="text-primary-light">Family</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Founded on the belief that everyone deserves compassionate, personalized care, 
                Noble Homecare Agency was born from a deeply personal experience of caring for family.
              </p>
            </div>
            <div className="animate-slide-in">
              <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?q=80&w=1200&auto=format&fit=crop" alt="Healthcare professional providing compassionate care to elderly patient" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - White Background */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1628177142898-93e46e6d625b?q=80&w=1200&auto=format&fit=crop" alt="Caregiver assisting elderly woman showing compassionate care" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
            </div>
            
            <div>
              <h2 className="text-healthcare-teal mb-6 font-bold text-left">The Heart of Our Company</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The heart of our company was born out of family. <em>"When my grandmother needed care, 
                  I saw firsthand how important it is to have compassionate, reliable, and personalized 
                  support at home. Entrusting someone to care for her showed me that true home care 
                  goes beyond daily tasks—it's about dignity, trust, and creating comfort for both 
                  the client and their family." ~Founder</em>
                </p>
                <p>Inspired by her journey, I founded Noble Homecare Agency with the mission to provide the same level of care, respect, and attentiveness to others that I wanted for my own loved one. Every client we serve is treated like family, because we know what it means to entrust someone with the care of those you love most.

              </p>
                <div className="bg-healthcare-secondary/10 p-6 rounded-lg border-l-4 border-healthcare-secondary bg-green-100">
                  <p className="font-medium text-healthcare-secondary italic">
                    "At Noble Homecare Agency, our passion is personal—and our care is from the heart."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Founder - Light Background */}
      <section className="section-padding bg-healthcare-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/20 to-healthcare-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop" alt="Compassionate Caregiver" className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover transform group-hover:scale-105 transition-all duration-500 border-2 border-white/50" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-healthcare-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            
            <div>
              <h2 className="text-healthcare-teal font-bold mb-6">Our Mission</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our mission is to safely meet the needs of our clients by providing high-quality, individualized care tailored to their specific conditions and lifestyles. We are especially passionate about supporting seniors and individuals who may struggle with daily living activities due to illness, disability, or age-related challenges. 
                </p>
                <p>
                  From minimal assistance to full-time care for bed-bound clients, we ensure every individual receives respectful and compassionate support.
                </p>
                <div className="bg-healthcare-primary/10 p-6 rounded-lg border-l-4 border-healthcare-primary bg-green-100">
                  <p className="font-medium text-healthcare-primary">
                    <strong>Vision:</strong> To provide personalized and compassionate home care services that honor dignity and inspire hope in every client we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - White Background */}
      <section className="section-padding bg-healthcare-accent py-0">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Noble Homecare Agency ensures clients and patients that they will have our full attention with their in-home care. Our reputation has been built on the success and quality of our staff and their dedication to the art of caring services. Our staff continually strives to demonstrate that we are an industry leader in providing private duty. We adhere to the industry's most rigorous standards to assure the highest quality of care.
              <br /><br />
              To maintain our high standards, we carefully screen all our employees, including completion of full criminal background checks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {commitmentCards.map((card, index) => <div key={index} className="healthcare-card text-center bg-green-100">
                {card.icon}
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Diverse Care Services Section - Background with Overlay */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/5 to-healthcare-pink/5"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-healthcare-teal font-bold mb-6">Culturally Sensitive Care</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We understand that quality healthcare goes beyond medical expertise—it requires 
                  cultural sensitivity and respect for diverse backgrounds, traditions, and preferences. 
                  Our diverse team of caregivers reflects the communities we serve.
                </p>
                <p>
                  From dietary preferences to communication styles, we ensure that each client receives 
                  care that honors their cultural identity and personal values. This approach creates 
                  a more comfortable and trusting environment for both clients and their families.
                </p>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Multilingual Support</h4>
                    <p className="text-gray-600">Our team includes caregivers who speak multiple languages to ensure clear communication.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Cultural Awareness Training</h4>
                    <p className="text-gray-600">All our staff receive training in cultural competency and sensitivity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop" alt="Diverse healthcare professional providing care with cultural sensitivity" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - White Background */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and every decision we make in serving our clients and their families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} style={{
            animationDelay: `${index * 0.1}s`
          }} className="healthcare-card text-center animate-fade-in bg-green-100">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Care Team - Background Image with Overlay */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop')`
      }}>
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Our Professional Care Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of healthcare professionals brings expertise, compassion, and dedication 
              to every client we serve.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" alt="Healthcare professional providing emotional support and care to patient" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </div>
            
            <div className="space-y-6">
              {teamMembers.map((member, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-healthcare-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-healthcare-secondary">{member.role}</h4>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-healthcare-secondary mb-4">
                Rigorous Screening & Training
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Every member of our care team undergoes comprehensive background checks, drug screening, 
                reference verification, and ongoing training to ensure they meet our high standards of 
                care and professionalism.
              </p>
              <Link to="/services">
                <Button className="btn-healthcare">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="font-bold mb-6">Ready to Experience Compassionate Care?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let us show you how our family-centered approach to healthcare can make a difference 
            in your life or the life of your loved one.
          </p>
          <Link to="/contact">
            <Button className="btn-healthcare-secondary text-lg px-8 py-4">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;