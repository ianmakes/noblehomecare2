
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    county: '',
    careType: [],
    urgency: '',
    message: '',
  });

  const counties = [
    'Fayette', 'Fulton', 'Clayton', 'Cobb', 'Coweta', 
    'DeKalb', 'Carroll', 'Douglas', 'Gwinnett', 'Henry'
  ];

  const careTypes = [
    'Personal Care', 'Companionship', 'Meal Preparation', 
    'Light Housekeeping', 'Transportation', 'Medication Supervision',
    'Skilled Nursing', 'Around-The-Clock Care'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Our care team will contact you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      county: '',
      careType: [],
      urgency: '',
      message: '',
    });
  };

  const handleCareTypeChange = (careType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      careType: checked 
        ? [...prev.careType, careType]
        : prev.careType.filter(type => type !== careType)
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Premier Healthcare<br />
              <span className="text-pink-200">of Georgia</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to start your journey to better care? Our compassionate team is here to help 
              you every step of the way. Contact us today for your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="healthcare-card text-center">
              <Phone className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our care coordinators</p>
              <a 
                href="tel:470-210-7666" 
                className="text-healthcare-teal font-semibold text-lg hover:text-healthcare-teal-dark transition-colors"
              >
                470-210-7666
              </a>
            </div>
            
            <div className="healthcare-card text-center">
              <Mail className="w-12 h-12 text-healthcare-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <a 
                href="mailto:service.premierhealthcarega@gmail.com" 
                className="text-healthcare-teal font-semibold hover:text-healthcare-teal-dark transition-colors break-all"
              >
                service.premierhealthcarega@gmail.com
              </a>
            </div>
            
            <div className="healthcare-card text-center">
              <MapPin className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Service Areas</h3>
              <p className="text-gray-600 mb-4">Serving 10 counties across Georgia</p>
              <p className="text-healthcare-teal font-semibold">
                Metro Atlanta & Surrounding Areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section-padding bg-healthcare-gray-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-healthcare-teal mb-6">Get Your Free Consultation</h2>
              <div className="bg-healthcare-teal-light/10 p-4 rounded-lg mb-6">
                <div className="flex items-center space-x-2 text-healthcare-teal">
                  <Clock size={20} />
                  <span className="font-medium">Our care team will contact you within 24 hours</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="county">County *</Label>
                    <Select value={formData.county} onValueChange={(value) => setFormData(prev => ({ ...prev, county: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        {counties.map((county) => (
                          <SelectItem key={county} value={county.toLowerCase()}>
                            {county} County
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Care Services Needed (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {careTypes.map((careType) => (
                      <div key={careType} className="flex items-center space-x-2">
                        <Checkbox
                          id={careType}
                          checked={formData.careType.includes(careType)}
                          onCheckedChange={(checked) => handleCareTypeChange(careType, checked as boolean)}
                        />
                        <Label htmlFor={careType} className="text-sm">{careType}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">How soon do you need care?</Label>
                  <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="week">Within a week</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="planning">Just planning ahead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your care needs</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your specific care needs, concerns, or questions. The more details you provide, the better we can help you."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-healthcare w-full text-lg py-3">
                  Submit Request - Get Free Consultation
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-healthcare-teal mb-6">Why Choose Premier Healthcare?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-healthcare-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Family-Centered Care</h4>
                      <p className="text-gray-600">Every client is treated like family, with the same care and attention we'd want for our own loved ones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-healthcare-teal mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Qualified Care Team</h4>
                      <p className="text-gray-600">Licensed CNAs, PCAs, companions, and skilled nursing staff with comprehensive background checks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-healthcare-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Personalized Care Plans</h4>
                      <p className="text-gray-600">Custom care plans tailored to your unique needs, preferences, and medical requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4 text-healthcare-teal">What Happens Next?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-healthcare-teal text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">We'll call you within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-healthcare-teal text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-700">Free in-home consultation & assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-healthcare-teal text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-700">Custom care plan creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-healthcare-teal text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span className="text-gray-700">Caregiver matching & care begins</span>
                  </div>
                </div>
              </div>

              <div className="bg-healthcare-teal text-white rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3">Need Immediate Help?</h4>
                <p className="mb-4">Call us now to speak with a care coordinator</p>
                <Button 
                  onClick={() => window.open('tel:470-210-7666')}
                  className="btn-healthcare-secondary w-full"
                >
                  <Phone className="mr-2" size={16} />
                  Call 470-210-7666
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-healthcare-teal mb-4">Counties We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premier Healthcare of Georgia proudly serves families across these Georgia counties:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {counties.map((county, index) => (
              <div key={index} className="healthcare-card text-center">
                <MapPin className="w-6 h-6 text-healthcare-teal mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">{county}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
