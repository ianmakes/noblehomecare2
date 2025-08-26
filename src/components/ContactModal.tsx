import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendFormEmail(formData, type);
      toast.success('Thank you! Your request has been sent. Our care team will contact you within 24 hours.');
      
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
      
      onClose();
    } catch (error) {
      toast.error('There was an issue sending your request. Please try calling us directly.');
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
          <DialogTitle className="text-2xl text-healthcare-teal">
            {type === 'consultation' ? 'Free Consultation Request' : 'Care Needs Assessment'}
          </DialogTitle>
        </DialogHeader>

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
            <Label>Care Services Needed</Label>
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
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your specific care needs, concerns, or questions..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="btn-healthcare flex-1">
              Submit Request
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => window.open('tel:470-210-7666')}
              className="flex items-center space-x-2"
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
