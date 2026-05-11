
export const sendFormEmail = async (formData: any, formName: string) => {
  try {
    console.log(`Submitting ${formName} form to Netlify...`);
    
    const netlifyData = new URLSearchParams();
    netlifyData.append("form-name", formName);
    
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        netlifyData.append(key, value.join(', '));
      } else if (value !== null && value !== undefined) {
        netlifyData.append(key, String(value));
      }
    });

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: netlifyData.toString(),
    });

    if (!response.ok) {
      throw new Error(`Netlify submission failed with status: ${response.status}`);
    }

    console.log('Netlify form submitted successfully');
    return true;
  } catch (error) {
    console.error('Error sending form:', error);
    
    // Final fallback to mailto if even Netlify fails
    const subject = `New ${formName} Submission - Noble Homecare`;
    let body = 'Form Details:\n';
    Object.entries(formData).forEach(([key, value]) => {
      body += `- ${key}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
    });
    
    const mailtoLink = `mailto:info@noblehomecareagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    throw error;
  }
};