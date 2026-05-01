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
    message: ''
  });
  const counties = ['Cobb', 'Paulding', 'Cherokee', 'Fulton', 'Douglas', 'Gwinnett', 'Polk', 'Bartow'];
  const careTypes = ['Personal Care', 'Companionship', 'Meal Preparation', 'Light Housekeeping', 'Transportation', 'Medication Supervision', 'Skilled Nursing', 'Around-The-Clock Care'];
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
      message: ''
    });
  };
  const handleCareTypeChange = (careType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      careType: checked ? [...prev.careType, careType] : prev.careType.filter(type => type !== careType)
    }));
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white min-h-[40vh] md:min-h-[45vh] flex items-center pt-32 pb-8 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Contact Noble <span className="text-healthcare-gold">Homecare</span>
            </h1>
            <div className="banner-star-line !my-4">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
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
            <div className="healthcare-card text-center bg-white border-b-4 border-healthcare-gold shadow-md hover:shadow-xl transition-all">
              <Phone className="w-12 h-12 text-healthcare-green mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-healthcare-green mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Speak with our care coordinators</p>
              <a href="tel:1-866-756-7374" className="text-healthcare-green font-bold text-xl hover:text-healthcare-gold transition-colors">
                1-866-756-7374
              </a>
            </div>
            
            <div className="healthcare-card text-center bg-white border-b-4 border-healthcare-gold shadow-md hover:shadow-xl transition-all">
              <Mail className="w-12 h-12 text-healthcare-gold mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-healthcare-green mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Send us your questions anytime</p>
              <a href="mailto:online.ianmakes@gmail.com" className="text-healthcare-green font-bold hover:text-healthcare-gold transition-colors break-all">
                online.ianmakes@gmail.com
              </a>
            </div>
            
            <div className="healthcare-card text-center bg-white border-b-4 border-healthcare-gold shadow-md hover:shadow-xl transition-all">
              <MapPin className="w-12 h-12 text-healthcare-green mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-healthcare-green mb-3">Service Areas</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Serving multiple counties across Georgia</p>
              <p className="text-healthcare-green font-bold text-lg">
                Metro Atlanta & Surrounding Areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section-padding bg-healthcare-green/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-healthcare-green font-serif font-bold text-3xl md:text-4xl mb-6">Get Your Free Consultation</h2>
              <div className="bg-healthcare-green/10 p-4 rounded-lg mb-6 border-l-4 border-healthcare-gold">
                <div className="flex items-center space-x-2 text-healthcare-green">
                  <Clock size={20} className="text-healthcare-gold" />
                  <span className="font-serif font-medium">Our care team will contact you within 24 hours</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData(prev => ({
                    ...prev,
                    name: e.target.value
                  }))} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData(prev => ({
                    ...prev,
                    phone: e.target.value
                  }))} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData(prev => ({
                    ...prev,
                    email: e.target.value
                  }))} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="county">County *</Label>
                    <Select value={formData.county} onValueChange={value => setFormData(prev => ({
                    ...prev,
                    county: value
                  }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        {counties.map(county => <SelectItem key={county} value={county.toLowerCase()}>
                            {county} County
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Care Services Needed (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {careTypes.map(careType => <div key={careType} className="flex items-center space-x-2">
                        <Checkbox id={careType} checked={formData.careType.includes(careType)} onCheckedChange={checked => handleCareTypeChange(careType, checked as boolean)} />
                        <Label htmlFor={careType} className="text-sm">{careType}</Label>
                      </div>)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">How soon do you need care?</Label>
                  <Select value={formData.urgency} onValueChange={value => setFormData(prev => ({
                  ...prev,
                  urgency: value
                }))}>
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
                  <Textarea id="message" value={formData.message} onChange={e => setFormData(prev => ({
                  ...prev,
                  message: e.target.value
                }))} placeholder="Describe your specific care needs, concerns, or questions. The more details you provide, the better we can help you." rows={4} />
                </div>

                <Button type="submit" className="btn-healthcare w-full text-lg py-4 shadow-lg">
                  Submit Request - Get Free Consultation
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-healthcare-green mb-6">Why Choose Noble Homecare Agency?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-healthcare-gold">
                    <Heart className="w-8 h-8 text-healthcare-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2 text-healthcare-green">Family-Centered Care</h4>
                      <p className="text-gray-600 leading-relaxed">Every client is treated like family, with the same care and attention we'd want for our own loved ones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-healthcare-gold">
                    <Users className="w-8 h-8 text-healthcare-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2 text-healthcare-green">Qualified Care Team</h4>
                      <p className="text-gray-600 leading-relaxed">Licensed CNAs, PCAs, companions, and skilled nursing staff with comprehensive background checks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-healthcare-gold">
                    <Award className="w-8 h-8 text-healthcare-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2 text-healthcare-green">Personalized Care Plans</h4>
                      <p className="text-gray-600 leading-relaxed">Custom care plans tailored to your unique needs, preferences, and medical requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-8 border-healthcare-gold">
                <h4 className="font-serif font-bold text-xl mb-6 text-healthcare-green">What Happens Next?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-healthcare-green text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">1</div>
                    <span className="text-gray-700 font-medium">We'll call you within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-healthcare-gold text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">2</div>
                    <span className="text-gray-700 font-medium">Free in-home consultation & assessment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-healthcare-green text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">3</div>
                    <span className="text-gray-700 font-medium">Custom care plan creation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-healthcare-gold text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">4</div>
                    <span className="text-gray-700 font-medium">Caregiver matching & care begins</span>
                  </div>
                </div>
              </div>

              <div className="bg-healthcare-green text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <h4 className="font-serif font-bold text-xl mb-3 relative z-10">Need Immediate Help?</h4>
                <p className="mb-6 relative z-10 text-white/90">Call us now to speak with a care coordinator</p>
                <Button onClick={() => window.open('tel:1-866-756-7374')} className="btn-healthcare-secondary w-full py-6 text-lg shadow-lg relative z-10">
                  <Phone className="mr-2" size={20} />
                  Call 1-866-756-7374
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
            <h2 className="text-healthcare-green font-serif font-bold text-3xl md:text-4xl mb-4">Counties We Serve</h2>
            <div className="banner-star-line">
              <span className="w-6 h-6 text-healthcare-gold">✦</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Noble Homecare Agency proudly serves families across these Georgia counties:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {counties.map((county, index) => <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-healthcare-green/10 text-center hover:shadow-md hover:border-healthcare-gold transition-all">
                <MapPin className="w-6 h-6 text-healthcare-gold mx-auto mb-2" />
                <h4 className="font-bold text-healthcare-green text-sm">{county}</h4>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;