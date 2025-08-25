
import { useState } from 'react';
import { Heart, Users, Utensils, Home, Car, Pill, Stethoscope, Clock, Shield, DollarSign, CreditCard, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const personalCareServices = [
    {
      icon: <Heart className="w-8 h-8 text-healthcare-pink" />,
      title: "Personal Care",
      description: "Bathing, grooming, toileting, dressing, and personal hygiene assistance with dignity and respect.",
      features: ["Bathing & Showering", "Grooming & Dressing", "Toileting Assistance", "Oral Care", "Skin Care"]
    },
    {
      icon: <Users className="w-8 h-8 text-healthcare-teal" />,
      title: "Companionship",
      description: "Friendly conversation, emotional support, and social engagement activities to reduce isolation.",
      features: ["Conversation & Socialization", "Reading Together", "Games & Activities", "Emotional Support", "Community Engagement"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-healthcare-pink" />,
      title: "Meal Preparation",
      description: "Nutritious meal planning, preparation, and assistance with eating according to dietary needs.",
      features: ["Menu Planning", "Grocery Shopping", "Meal Cooking", "Special Diets", "Feeding Assistance"]
    },
    {
      icon: <Home className="w-8 h-8 text-healthcare-teal" />,
      title: "Light Housekeeping",
      description: "Maintaining a clean, safe, and comfortable living environment for optimal health.",
      features: ["Dusting & Vacuuming", "Laundry & Linens", "Kitchen Cleaning", "Organizing", "Trash Removal"]
    },
    {
      icon: <Car className="w-8 h-8 text-healthcare-pink" />,
      title: "Transportation",
      description: "Safe, reliable transportation to medical appointments, errands, and social activities.",
      features: ["Medical Appointments", "Grocery Shopping", "Pharmacy Visits", "Social Outings", "Errands"]
    },
    {
      icon: <Pill className="w-8 h-8 text-healthcare-teal" />,
      title: "Medication Supervision",
      description: "Monitoring medication schedules and reminders to ensure proper medication management.",
      features: ["Medication Reminders", "Pill Organization", "Schedule Monitoring", "Prescription Pickup", "Communication with Doctors"]
    }
  ];

  const specializedServices = [
    {
      icon: <Stethoscope className="w-8 h-8 text-healthcare-teal" />,
      title: "Skilled Nursing",
      description: "Professional nursing care by licensed RNs and LPNs for medical conditions and treatments.",
      features: ["Wound Care", "IV Therapy", "Medication Administration", "Vital Signs Monitoring", "Post-Surgical Care"]
    },
    {
      icon: <Clock className="w-8 h-8 text-healthcare-pink" />,
      title: "Around-The-Clock Care",
      description: "24-hour comprehensive care services for clients requiring continuous support and monitoring.",
      features: ["24/7 Supervision", "Night Care", "Emergency Response", "Continuous Monitoring", "Family Communication"]
    },
    {
      icon: <Shield className="w-8 h-8 text-healthcare-teal" />,
      title: "Ambulation & Transfer",
      description: "Safe mobility assistance and transfer support to prevent falls and maintain independence.",
      features: ["Walking Assistance", "Transfer Support", "Fall Prevention", "Mobility Exercises", "Equipment Usage"]
    }
  ];

  const paymentOptions = [
    {
      icon: <DollarSign className="w-8 h-8 text-healthcare-teal" />,
      title: "Private Pay (Self-Pay)",
      description: "Direct payment for services with flexible payment methods.",
      methods: ["Credit Card", "Debit Card", "Check", "ACH Transfer"]
    },
    {
      icon: <Shield className="w-8 h-8 text-healthcare-pink" />,
      title: "Long-Term Care Insurance",
      description: "We assist with documentation and billing for insurance coverage.",
      methods: ["Policy Verification", "Claims Processing", "Documentation Support", "Direct Billing"]
    },
    {
      icon: <Building className="w-8 h-8 text-healthcare-teal" />,
      title: "Veterans Assistance",
      description: "Home care benefits through VA programs for eligible veterans and spouses.",
      methods: ["VA Benefits", "Aid & Attendance", "Housebound Benefits", "Application Assistance"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-healthcare-pink" />,
      title: "Medicaid Waiver Programs",
      description: "CCSP, SOURCE, and other community-based funding options.",
      methods: ["CCSP Program", "SOURCE Program", "Community Waivers", "Application Support"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Home Care<br />
              <span className="text-pink-200">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From 1-24 hours per day, we provide personalized care services that help you maintain 
              independence, dignity, and comfort in your own home.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="btn-healthcare-secondary text-lg px-8 py-4"
            >
              Get Your Care Plan Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="personal-care" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="personal-care" className="text-base">Personal Care Services</TabsTrigger>
              <TabsTrigger value="specialized" className="text-base">Specialized Care</TabsTrigger>
              <TabsTrigger value="payment" className="text-base">Payment Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal-care">
              <div className="text-center mb-12">
                <h2 className="text-healthcare-teal mb-4">Personal Care Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our personal care services are designed to help you maintain your daily routines 
                  and independence while ensuring your safety and comfort.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalCareServices.map((service, index) => (
                  <div key={index} className="healthcare-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialized">
              <div className="text-center mb-12">
                <h2 className="text-healthcare-teal mb-4">Specialized Care Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Advanced care services provided by our skilled nursing staff and specialized caregivers 
                  for complex medical needs and continuous care requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {specializedServices.map((service, index) => (
                  <div key={index} className="healthcare-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-healthcare-pink rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="bg-healthcare-teal-light/10 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-healthcare-teal mb-4">
                    Diagnosis-Specific Care
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                    Our skilled nursing team provides specialized care for specific medical conditions 
                    including diabetes management, heart conditions, post-surgical recovery, and chronic disease management.
                  </p>
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-healthcare"
                  >
                    Discuss Your Medical Needs
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="payment">
              <div className="text-center mb-12">
                <h2 className="text-healthcare-teal mb-4">Flexible Payment Options</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer multiple payment options to make quality home care accessible and affordable 
                  for families across Georgia.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="healthcare-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center space-x-3 mb-4">
                      {option.icon}
                      <h3 className="text-xl font-semibold">{option.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="space-y-2">
                      {option.methods.map((method, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                          <span>{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-healthcare-teal/10 to-healthcare-pink/10 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-healthcare-teal mb-4">
                    Coming Soon: Additional Funding Options
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                    We're constantly expanding our payment options and working with additional community 
                    programs to help families access the care they need. Contact us to discuss other 
                    potential funding sources.
                  </p>
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-healthcare"
                  >
                    Explore Payment Options
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Care Hours */}
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
                  <div className="w-12 h-12 bg-healthcare-teal text-white rounded-lg flex items-center justify-center font-bold">
                    1-4
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Short-Term Visits</h4>
                    <p className="text-gray-600">Perfect for medication reminders, meal preparation, or companionship visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-pink text-white rounded-lg flex items-center justify-center font-bold">
                    8-12
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Half-Day Care</h4>
                    <p className="text-gray-600">Comprehensive daytime or evening care including personal care and household tasks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal text-white rounded-lg flex items-center justify-center font-bold">
                    24
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Around-the-Clock Care</h4>
                    <p className="text-gray-600">Continuous care and monitoring for clients with complex needs or recovering from surgery.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/16682b85-c531-44fb-99d8-0f58b6f5d250.png"
                alt="Healthcare professional providing round-the-clock care"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
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
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="btn-healthcare-secondary text-lg px-8 py-4"
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="consultation"
      />

      <Footer />
    </div>
  );
};

export default Services;
