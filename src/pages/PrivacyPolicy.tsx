import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Request our services or schedule a consultation</li>
                    <li>Apply for employment opportunities</li>
                    <li>Contact us through our website or by phone</li>
                    <li>Subscribe to our communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide and improve our healthcare services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Process employment applications</li>
                    <li>Communicate with you about our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>With your consent</li>
                    <li>To provide services you have requested</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">HIPAA Compliance</h2>
                  <p className="text-gray-700">
                    As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA) 
                    and maintain strict confidentiality of all protected health information. We have implemented appropriate 
                    safeguards to protect the privacy and security of your health information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your personal information against unauthorized 
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                    or electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to your information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of certain communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about this Privacy Policy or our practices, please contact us:
                  </p>
                  <div className="bg-healthcare-accent p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Premier Healthcare of Georgia, Inc.</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      Phone: <a href="tel:470-210-7666" className="text-healthcare-teal hover:underline">470-210-7666</a>
                    </p>
                    <p className="text-gray-700">
                      Email: <a href="mailto:service.premierhealthcarega@gmail.com" className="text-healthcare-teal hover:underline">service.premierhealthcarega@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-healthcare-teal mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the effective date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;