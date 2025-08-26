
interface FormData {
  name: string;
  email: string;
  phone: string;
  county: string;
  careType: string[];
  urgency: string;
  message: string;
}

export const sendFormEmail = async (formData: FormData, formType: 'consultation' | 'care-needs') => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #8fc069, #a5cc7a); color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; background: #f9f9f9; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }
        .label { font-weight: bold; color: #8fc069; }
        .value { margin-top: 5px; }
        .care-list { list-style: none; padding: 0; }
        .care-list li { background: #8fc069; color: white; padding: 5px 10px; margin: 3px 0; border-radius: 3px; display: inline-block; }
        .footer { background: #333; color: white; padding: 20px; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Premier Healthcare of Georgia</h1>
        <h2>New ${formType === 'consultation' ? 'Consultation' : 'Care Needs Assessment'} Request</h2>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="label">Full Name:</div>
          <div class="value">${formData.name}</div>
        </div>
        
        <div class="field">
          <div class="label">Phone Number:</div>
          <div class="value">${formData.phone}</div>
        </div>
        
        <div class="field">
          <div class="label">Email Address:</div>
          <div class="value">${formData.email || 'Not provided'}</div>
        </div>
        
        <div class="field">
          <div class="label">County:</div>
          <div class="value">${formData.county}</div>
        </div>
        
        <div class="field">
          <div class="label">Care Services Needed:</div>
          <div class="value">
            <ul class="care-list">
              ${formData.careType.map(type => `<li>${type}</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <div class="field">
          <div class="label">Urgency:</div>
          <div class="value">${formData.urgency || 'Not specified'}</div>
        </div>
        
        <div class="field">
          <div class="label">Additional Information:</div>
          <div class="value">${formData.message || 'None provided'}</div>
        </div>
        
        <div class="field">
          <div class="label">Submission Time:</div>
          <div class="value">${new Date().toLocaleString()}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>This request was submitted through the Premier Healthcare of Georgia website.</p>
        <p>Please respond to the client within 24 hours as promised.</p>
      </div>
    </body>
    </html>
  `;

  // Create mailto link for now (basic email functionality)
  const subject = `New ${formType === 'consultation' ? 'Consultation' : 'Care Assessment'} Request from ${formData.name}`;
  const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
County: ${formData.county}
Care Services: ${formData.careType.join(', ')}
Urgency: ${formData.urgency || 'Not specified'}
Message: ${formData.message || 'None provided'}
Submitted: ${new Date().toLocaleString()}
  `;

  const mailtoLink = `mailto:online.ianmakes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
  
  return true;
};
