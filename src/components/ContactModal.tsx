
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Phone, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { sendFormEmail } from '@/utils/emailService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'consultation' | 'care-needs';
}

const ContactModal = ({ isOpen, onClose, type = 'consultation' }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    county: '',
    careType: [],
    urgency: '',
    message: '',
    // Client Info fields
    clientFullName: '',
    clientDOB: '',
    clientAge: '',
    clientDiagnosis: '',
    clientCity: '',
    primaryContactName: '',
    primaryContactPhone: '',
    primaryContactEmail: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate age from DOB
  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age.toString();
  };

  // Update age when DOB changes
  useEffect(() => {
    if (formData.clientDOB) {
      const calculatedAge = calculateAge(formData.clientDOB);
      setFormData(prev => ({ ...prev, clientAge: calculatedAge }));
    }
  }, [formData.clientDOB]);

  const counties = [
    'Fayette', 'Fulton', 'Clayton', 'Cobb', 'Coweta', 
    'DeKalb', 'Carroll', 'Douglas', 'Gwinnett', 'Henry'
  ];

  const careTypes = [
    'Personal Care', 'Companionship', 'Meal Preparation', 
    'Light Housekeeping', 'Transportation', 'Medication Supervision',
    'Skilled Nursing', 'Around-The-Clock Care'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.county) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await sendFormEmail(formData, type);
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
        clientFullName: '',
        clientDOB: '',
        clientAge: '',
        clientDiagnosis: '',
        clientCity: '',
        primaryContactName: '',
        primaryContactPhone: '',
        primaryContactEmail: '',
      });
      
      onClose();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('There was an issue sending your request. Please try calling us directly at 470-210-7666.');
    } finally {
      setIsSubmitting(false);
    }
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl text-healthcare-teal">
            {type === 'consultation' ? 'Free Consultation Request' : 'Care Needs Assessment'}
          </DialogTitle>
        </DialogHeader>

        <div className="bg-healthcare-teal-light/10 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
          <div className="flex items-center space-x-2 text-healthcare-teal">
            <Clock size={18} className="md:hidden" />
            <Clock size={20} className="hidden md:block" />
            <span className="font-medium text-sm md:text-base">Our care team will contact you within 24 hours</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Client Info Section - Now First */}
          <div className="my-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-healthcare-teal">Client Information</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientFullName" className="text-sm md:text-base">Client's Full Name</Label>
                <Input
                  id="clientFullName"
                  value={formData.clientFullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientFullName: e.target.value }))}
                  className="h-10 md:h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientDOB" className="text-sm md:text-base">Date of Birth</Label>
                <Input
                  id="clientDOB"
                  type="date"
                  value={formData.clientDOB}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientDOB: e.target.value }))}
                  className="h-10 md:h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientAge" className="text-sm md:text-base">Age</Label>
                <Input
                  id="clientAge"
                  value={formData.clientAge}
                  disabled
                  className="h-10 md:h-11 bg-muted"
                  placeholder="Calculated from DOB"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientCity" className="text-sm md:text-base">City</Label>
                <Input
                  id="clientCity"
                  value={formData.clientCity}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientCity: e.target.value }))}
                  className="h-10 md:h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientDiagnosis" className="text-sm md:text-base">Diagnosis</Label>
              <Textarea
                id="clientDiagnosis"
                value={formData.clientDiagnosis}
                onChange={(e) => setFormData(prev => ({ ...prev, clientDiagnosis: e.target.value }))}
                placeholder="Please describe any relevant medical conditions or diagnoses..."
                rows={2}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryContactName" className="text-xs">Primary Contact Name</Label>
                <Input
                  id="primaryContactName"
                  value={formData.primaryContactName}
                  onChange={(e) => setFormData(prev => ({ ...prev, primaryContactName: e.target.value }))}
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primaryContactPhone" className="text-xs">Primary Contact Phone</Label>
                <Input
                  id="primaryContactPhone"
                  type="tel"
                  value={formData.primaryContactPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, primaryContactPhone: e.target.value }))}
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primaryContactEmail" className="text-xs">Primary Contact Email</Label>
                <Input
                  id="primaryContactEmail"
                  type="email"
                  value={formData.primaryContactEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, primaryContactEmail: e.target.value }))}
                  className="h-9"
                />
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="my-6">
            <Separator className="bg-healthcare-teal/20" />
          </div>

          {/* Contact Person Information - Now Second */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="h-10 md:h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="h-10 md:h-11"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-base">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-10 md:h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="county" className="text-sm md:text-base">County *</Label>
              <Select value={formData.county} onValueChange={(value) => setFormData(prev => ({ ...prev, county: value }))}>
                <SelectTrigger className="h-10 md:h-11">
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
            <Label className="text-sm md:text-base">Care Services Needed</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {careTypes.map((careType) => (
                <div key={careType} className="flex items-center space-x-2">
                  <Checkbox
                    id={careType}
                    checked={formData.careType.includes(careType)}
                    onCheckedChange={(checked) => handleCareTypeChange(careType, checked as boolean)}
                  />
                  <Label htmlFor={careType} className="text-xs md:text-sm">{careType}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency" className="text-sm md:text-base">How soon do you need care?</Label>
            <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
              <SelectTrigger className="h-10 md:h-11">
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
            <Label htmlFor="message" className="text-sm md:text-base">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your specific care needs, concerns, or questions..."
              rows={3}
              className="md:rows-4"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <Button 
              type="submit" 
              className="btn-healthcare h-11 md:h-12 text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => window.open('tel:470-210-7666')}
              className="flex items-center justify-center space-x-2 h-11 md:h-12 text-sm md:text-base"
            >
              <Phone size={16} />
              <span>Call Now: 470-210-7666</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
