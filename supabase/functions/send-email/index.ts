
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  county: string;
  careType: string[];
  urgency: string;
  message: string;
  formType: 'consultation' | 'care-needs';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormData = await req.json();
    
    const subject = formData.formType === 'consultation' 
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
          <h2>${formData.formType === 'consultation' ? 'Free Consultation Request' : 'Care Needs Assessment'}</h2>
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
          <p>This ${formData.formType === 'consultation' ? 'consultation request' : 'care assessment'} was submitted through premierhealthcarega.com</p>
          <p>Please respond within 24 hours as promised to the client.</p>
        </div>
      </body>
      </html>
    `;

    console.log('Sending email with data:', formData);

    const emailResponse = await resend.emails.send({
      from: "Premier Healthcare of Georgia <no-reply@resend.dev>",
      to: ["service.premierhealthcarega@gmail.com"],
      subject: subject,
      html: htmlTemplate,
      reply_to: formData.email || "service.premierhealthcarega@gmail.com",
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
