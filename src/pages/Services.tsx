import { useState } from 'react';
import { Heart, Users, Utensils, Home, Car, Pill, Stethoscope, Clock, Shield, DollarSign, CreditCard, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const personalCareServices = [{
    icon: <Heart className="w-8 h-8 text-healthcare-pink" />,
    title: "Personal Care",
    description: "Providing essential personal care to ensure daily comfort and safety.",
    features: ["Personal Care", "Injection Administration", "Meal Preparation", "Mobility Assistance", "Medication Reminders", "Laundry", "Light Housekeeping", "Bedside Supervision", "Doctor Visits", "Bedbound & Incontinence Care"]
  }, {
    icon: <Users className="w-8 h-8 text-healthcare-teal" />,
    title: "Companionship",
    description: "Friendly conversation, emotional support, and assistance with daily errands.",
    features: ["Companionship Services", "Bathing", "Running Errands and much more!", "Social Engagement"]
  }];
  const specializedServices = [{
    icon: <Stethoscope className="w-8 h-8 text-healthcare-teal" />,
    title: "Skilled Nursing Services",
    description: "All services for skilled nursing according to physician orders.",
    features: ["Medication Management", "Wound Care", "Chronic Disease Management", "Health Monitoring & Assessment"]
  }];
  const paymentOptions = [{
    icon: <DollarSign className="w-8 h-8 text-healthcare-teal" />,
    title: "Private Pay (Self-Pay)",
    description: "Direct payment for services with flexible payment methods.",
    methods: ["Credit Card", "Debit Card", "Check", "ACH Transfer"]
  }, {
    icon: <Shield className="w-8 h-8 text-healthcare-pink" />,
    title: "Long-Term Care Insurance",
    description: "We assist with documentation and billing for insurance coverage.",
    methods: ["Policy Verification", "Claims Processing", "Documentation Support", "Direct Billing"]
  }, {
    icon: <Building className="w-8 h-8 text-healthcare-teal" />,
    title: "Veterans Assistance",
    description: "Home care benefits through VA programs for eligible veterans and spouses.",
    methods: ["VA Benefits", "Aid & Attendance", "Housebound Benefits", "Application Assistance"]
  }, {
    icon: <CreditCard className="w-8 h-8 text-healthcare-pink" />,
    title: "Medicaid Waiver Programs",
    description: "CCSP, SOURCE, and other community-based funding options.",
    methods: ["CCSP Program", "SOURCE Program", "Community Waivers", "Application Support"],
    comingSoon: true
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white min-h-[45vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Comprehensive <span className="text-healthcare-gold">Care</span> Services
            </h1>
            <div className="banner-star-line !my-4">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
              From 1-24 hours per day, we provide personalized care services that help you maintain 
              independence, dignity, and comfort in your own home.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="btn-healthcare-secondary text-lg px-8 py-4">
              Get Your Care Plan Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Tabs - Enhanced Design */}
      <section className="section-padding banner-wave">
        <div className="container-custom">
          <Tabs defaultValue="personal-care" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-12 h-auto gap-2 bg-healthcare-green/10 p-2 rounded-xl">
              <TabsTrigger value="personal-care" className="font-serif font-semibold text-sm sm:text-base py-3 px-4 rounded-lg data-[state=active]:bg-healthcare-green data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300">
                Personal Care
              </TabsTrigger>
              <TabsTrigger value="specialized" className="font-serif font-semibold text-sm sm:text-base py-3 px-4 rounded-lg data-[state=active]:bg-healthcare-green data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300">
                Specialized Care
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal-care">
              <div className="text-center mb-12">
                <h2 className="text-healthcare-green font-serif font-bold mb-4">Personal Care Services</h2>
                <div className="banner-star-line">
                  <span className="w-6 h-6 text-healthcare-gold">✦</span>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our personal care services are designed to help you maintain your daily routines 
                  and independence while ensuring your safety and comfort.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalCareServices.map((service, index) => <div key={index} className="healthcare-card healthcare-card-gold-border animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-healthcare-green/10 rounded-full">{service.icon}</div>
                      <h3 className="text-xl font-serif font-bold text-healthcare-green">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-healthcare-gold rounded-full"></div>
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>
            </TabsContent>
            
            <TabsContent value="specialized">
              <div className="text-center mb-12">
                <h2 className="text-healthcare-green font-serif font-bold mb-4">Specialized Care Services</h2>
                <div className="banner-star-line">
                  <span className="w-6 h-6 text-healthcare-gold">✦</span>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Advanced care services provided by our skilled nursing staff and specialized caregivers.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {specializedServices.map((service, index) => <div key={index} className="healthcare-card healthcare-card-gold-border animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-healthcare-green/10 rounded-full">{service.icon}</div>
                      <h3 className="text-xl font-serif font-bold text-healthcare-green">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-healthcare-gold rounded-full"></div>
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>
              
              <div className="bg-healthcare-green/5 rounded-2xl p-8 border-2 border-healthcare-gold/20">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-healthcare-green mb-4">
                    Diagnosis-Specific Care
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                    Our skilled nursing team provides specialized care for specific medical conditions 
                    including diabetes management, heart conditions, post-surgical recovery, and chronic disease management.
                  </p>
                  <Button onClick={() => setIsModalOpen(true)} className="btn-healthcare">
                    Discuss Your Medical Needs
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Care Hours - Fixed Mobile Layout */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-healthcare-teal mb-6">Flexible Care Hours</h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand that care needs vary, which is why we offer flexible scheduling 
                from 1-24 hours per day to meet your specific requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1-4
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-2">Short-Term Visits</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Perfect for medication reminders, meal preparation, or companionship visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-pink text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    8-12
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-2">Half-Day Care</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Comprehensive daytime or evening care including personal care and household tasks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    24
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-2">Around-the-Clock Care</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Continuous care and monitoring for clients with complex needs or recovering from surgery.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src="https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/1_umffyt.jpg" alt="Healthcare professional providing round-the-clock care" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our care coordinators will work with you to create a personalized care plan that meets 
            your specific needs and budget. Contact us today for a free consultation.
          </p>
          <Button onClick={() => setIsModalOpen(true)} className="btn-healthcare-secondary text-lg px-8 py-4">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="consultation" />

      <Footer />
    </div>;
};
export default Services;