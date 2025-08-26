
interface FormData {
  name: string;
  email: string;
  phone: string;
  county: string;
  careType: string[];
  urgency: string;
  message: string;
}

export const sendFormEmail = (formData: FormData, formType: 'consultation' | 'care-needs') => {
  const subject = formType === 'consultation' 
    ? 'New Free Consultation Request - Premier Healthcare of Georgia'
    : 'New Care Needs Assessment - Premier Healthcare of Georgia';

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #8fc069 0%, #a5cc7a 100%); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .form-section { background: white; padding: 20px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .field-label { font-weight: bold; color: #8fc069; margin-bottom: 5px; }
        .field-value { margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
        .care-types { display: flex; flex-wrap: wrap; gap: 10px; }
        .care-type-tag { background: #8fc069; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Premier Healthcare of Georgia</h1>
        <h2>${formType === 'consultation' ? 'Free Consultation Request' : 'Care Needs Assessment'}</h2>
      </div>
      
      <div class="content">
        <div class="form-section">
          <h3>Contact Information</h3>
          <div class="field-label">Name:</div>
          <div class="field-value">${formData.name}</div>
          
          <div class="field-label">Phone Number:</div>
          <div class="field-value">${formData.phone}</div>
          
          <div class="field-label">Email:</div>
          <div class="field-value">${formData.email || 'Not provided'}</div>
          
          <div class="field-label">County:</div>
          <div class="field-value">${formData.county} County</div>
        </div>
        
        <div class="form-section">
          <h3>Care Requirements</h3>
          <div class="field-label">Services Needed:</div>
          <div class="care-types">
            ${formData.careType.map(type => `<span class="care-type-tag">${type}</span>`).join('')}
          </div>
          
          <div class="field-label">Timeframe:</div>
          <div class="field-value">${formData.urgency || 'Not specified'}</div>
        </div>
        
        ${formData.message ? `
        <div class="form-section">
          <h3>Additional Information</h3>
          <div class="field-value">${formData.message}</div>
        </div>
        ` : ''}
      </div>
      
      <div class="footer">
        <p>This ${formType === 'consultation' ? 'consultation request' : 'care assessment'} was submitted through premierhealthcarega.com</p>
        <p>Please respond within 24 hours as promised to the client.</p>
      </div>
    </body>
    </html>
  `;

  const body = `Subject: ${subject}

Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- County: ${formData.county} County

Care Requirements:
- Services Needed: ${formData.careType.join(', ')}
- Timeframe: ${formData.urgency || 'Not specified'}

${formData.message ? `Additional Information:\n${formData.message}` : ''}

---
This ${formType === 'consultation' ? 'consultation request' : 'care assessment'} was submitted through premierhealthcarega.com
Please respond within 24 hours as promised to the client.`;

  // Create mailto link
  const mailtoLink = `mailto:online.ianmakes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open email client
  window.open(mailtoLink);
};
