import { supabase } from '@/integrations/supabase/client';

interface FormData {
  name: string;
  email: string;
  phone: string;
  county: string;
  careType: string[];
  urgency: string;
  message: string;
}

export const sendFormEmail = async (formData: FormData, formType: 'consultation' | 'care-needs' | 'job-application') => {
  try {
    console.log('Sending email via Supabase Edge Function:', { formData, formType });
    
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: {
        ...formData,
        formType
      }
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Fallback to mailto as backup
    const subject = formType === 'consultation' 
      ? 'New Free Consultation Request - Premier Healthcare of Georgia'
      : formType === 'care-needs'
      ? 'New Care Needs Assessment - Premier Healthcare of Georgia'
      : 'New Job Application - Premier Healthcare of Georgia';

    const body = `Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- County: ${formData.county} County

Care Requirements:
- Services Needed: ${formData.careType.join(', ')}
- Timeframe: ${formData.urgency || 'Not specified'}

${formData.message ? `Additional Information:\n${formData.message}` : ''}

---
This ${formType === 'consultation' ? 'consultation request' : formType === 'care-needs' ? 'care assessment' : 'job application'} was submitted through premierhealthcarega.com
Please respond within 24 hours as promised to the ${formType === 'job-application' ? 'applicant' : 'client'}.`;

    const mailtoLink = `mailto:service.premierhealthcarega@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    throw error;
  }
};