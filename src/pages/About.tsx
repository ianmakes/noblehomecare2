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
      <section className="healthcare-gradient text-white min-h-[45vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                Our Story Begins With <span className="text-healthcare-gold italic">Family</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                Founded on the belief that everyone deserves compassionate, personalized care, 
                Noble Homecare Agency was born from a deeply personal experience.
              </p>
            </div>
            <div className="animate-slide-in">
              <img src="https://loremflickr.com/1200/800/senior,care?random=1" alt="Healthcare professional providing compassionate care to elderly patient" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - White Background */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://loremflickr.com/1200/800/elderly,caregiver?random=2" alt="Caregiver assisting elderly woman showing compassionate care" className="rounded-2xl shadow-xl w-full h-[500px] object-cover border-b-8 border-healthcare-gold/30" />
            </div>
            
            <div>
              <h2 className="text-healthcare-green font-serif mb-4 font-bold text-left">About Noble Homecare Agency</h2>
              <div className="banner-star-line !justify-start !my-4">
                <span className="w-6 h-6 text-healthcare-gold">✦</span>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Noble Homecare Agency is dedicated to providing high-quality, personalized in-home healthcare services designed to meet the unique needs of each client. We understand that receiving care in the comfort of one’s home promotes dignity, independence, and emotional well-being. Our goal is to support individuals and families by delivering compassionate, reliable, and professional care services that enhance quality of life.
                </p>
                <p>
                  At Noble Homecare Agency, we go above and beyond to ensure that every client receives the attention and support they deserve. Our team consists of highly trained and carefully screened caregivers who are committed to making a positive difference in the lives of those we serve.
                </p>
                <div className="bg-healthcare-green/5 p-6 rounded-lg border-l-4 border-healthcare-gold bg-green-50">
                  <p className="font-serif font-medium text-healthcare-green italic text-lg">
                    "At Noble Homecare Agency, our passion is personal—and our care is from the heart."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - Light Background */}
      <section className="section-padding bg-healthcare-accent/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-healthcare-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img src="https://loremflickr.com/1200/800/healthcare,nurse?random=3" alt="Compassionate Caregiver" className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover transform group-hover:scale-105 transition-all duration-500 border-2 border-white/50" />
            </div>
            
            <div>
              <h2 className="text-healthcare-green font-serif font-bold mb-4">Our Mission</h2>
              <div className="banner-star-line !justify-start !my-4">
                <span className="w-6 h-6 text-healthcare-gold">✦</span>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Noble Homecare Agency LLC, our mission is to safely meet the needs of our clients by providing high quality individualized care all the way to being bed-bound. We thrive by supporting and caring for seniors that can't maintain daily living activities due to illness or disabilities.
                </p>
                <p>
                  We specialize specifically with seniors that can no longer support themselves with toileting, feeding, and other daily activities. Our compassionate team ensures every individual receives respectful and personalized support in the comfort of their home.
                </p>
                <div className="bg-healthcare-green p-6 rounded-lg border-b-4 border-healthcare-gold shadow-lg">
                  <p className="font-serif font-medium text-white text-lg">
                    <span className="text-healthcare-gold font-bold">Vision:</span> To provide personalized and compassionate home care services that honor dignity, independence, and emotional well-being for every client we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - White Background */}
      <section className="section-padding py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-green font-serif font-bold mb-4">Our Commitment</h2>
            <div className="banner-star-line">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Noble Homecare Agency ensures clients and patients that they will have our full attention with their in-home care. Our reputation has been built on the success and quality of our staff and their dedication to the art of caring services. 
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
              <img src="https://loremflickr.com/1200/800/family,elderly?random=4" alt="Diverse healthcare professional providing care with cultural sensitivity" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
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
        backgroundImage: `url('https://loremflickr.com/1200/800/senior,health?random=5')`
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
              <img src="https://loremflickr.com/1200/800/medical,caregiver?random=6" alt="Healthcare professional providing emotional support and care to patient" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
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