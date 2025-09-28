import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Heart, Users, Shield, Award, Briefcase, Clock, Star, Mail, FileText, Upload } from 'lucide-react';
import Footer from '@/components/Footer';
import { sendFormEmail } from '@/utils/emailService';
const jobApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  zipCode: z.string().min(5, 'Please enter a valid zip code'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  availability: z.array(z.string()).min(1, 'Please select at least one availability option'),
  workAnywhereInGeorgia: z.string().min(1, 'Please select if you can work anywhere in Georgia'),
  countiesCanWork: z.string().optional(),
  willingToTravel: z.string().min(1, 'Please select if you are willing to travel'),
  education: z.string().min(1, 'Please select your education level'),
  gender: z.string().min(1, 'Please select your gender'),
  ethnicity: z.string().min(1, 'Please select your ethnicity'),
  languagesSpoken: z.string().min(1, 'Please list languages you speak'),
  certifications: z.string().optional(),
  coverLetter: z.string().min(50, 'Please provide a cover letter (minimum 50 characters)'),
  resume: z.string().min(1, 'Please upload your resume'),
  previousExperience: z.string().min(10, 'Please provide details about your previous experience'),
  whyInterested: z.string().min(10, 'Please tell us why you are interested in this position'),
  references: z.string().min(10, 'Please provide at least one reference'),
  backgroundCheck: z.boolean().refine(val => val === true, 'You must consent to background check'),
  drugTest: z.boolean().refine(val => val === true, 'You must consent to drug testing')
});
type JobApplicationForm = z.infer<typeof jobApplicationSchema>;
const Jobs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm<JobApplicationForm>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      position: '',
      experience: '',
      availability: [],
      workAnywhereInGeorgia: '',
      countiesCanWork: '',
      willingToTravel: '',
      education: '',
      gender: '',
      ethnicity: '',
      languagesSpoken: '',
      certifications: '',
      coverLetter: '',
      resume: '',
      previousExperience: '',
      whyInterested: '',
      references: '',
      backgroundCheck: false,
      drugTest: false
    }
  });
  const onSubmit = async (data: JobApplicationForm) => {
    setIsSubmitting(true);
    try {
      // Transform data for email service
      const emailData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        county: `${data.city}, ${data.state} ${data.zipCode}`,
        // Using city/state as county field
        careType: [data.position],
        // Using position as careType for compatibility
        urgency: data.experience,
        // Using experience as urgency for compatibility
        message: `APPLICATION DETAILS:
Address: ${data.address}, ${data.city}, ${data.state} ${data.zipCode}
Position Applied For: ${data.position}
Experience Level: ${data.experience}
Availability: ${data.availability.join(', ')}

WORK LOCATION & DEMOGRAPHICS:
Can work anywhere in Georgia: ${data.workAnywhereInGeorgia}
Counties can work in: ${data.countiesCanWork || 'N/A'}
Willing to travel: ${data.willingToTravel}
Education Level: ${data.education}
Gender: ${data.gender}
Ethnicity: ${data.ethnicity}
Languages Spoken: ${data.languagesSpoken}

Certifications: ${data.certifications || 'None specified'}

Cover Letter:
${data.coverLetter}

Resume: ${data.resume}

Previous Experience:
${data.previousExperience}

Why Interested:
${data.whyInterested}

References:
${data.references}`
      };
      await sendFormEmail(emailData, 'job-application' as any);
      toast.success('Application submitted successfully! We will review your application and contact you soon.');
      form.reset();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const positions = ['Certified Nursing Assistant (CNA)', 'Personal Care Assistant (PCA)', 'Companion & Sitter', 'Registered Nurse (RN)', 'Licensed Practical Nurse (LPN)'];
  const experienceLevels = ['Entry Level (0-1 years)', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  const availabilityOptions = ['Full-time (40+ hours/week)', 'Part-time (20-39 hours/week)', 'Weekdays', 'Weekends', 'Evenings', 'Overnight shifts', 'On-call'];
  const educationLevels = ['High School Diploma/GED', 'Some College', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctoral Degree', 'Professional Certification', 'Other'];
  const ethnicityOptions = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanic or Latino', 'Native Hawaiian or Other Pacific Islander', 'White', 'Two or More Races', 'Prefer not to answer'];
  const benefits = [{
    icon: <Heart className="w-8 h-8 text-healthcare-primary" />,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every day"
  }, {
    icon: <Users className="w-8 h-8 text-healthcare-secondary" />,
    title: "Supportive Team",
    description: "Join a caring team that values your contribution"
  }, {
    icon: <Shield className="w-8 h-8 text-healthcare-teal" />,
    title: "Comprehensive Benefits",
    description: "Health insurance, paid time off, and more"
  }, {
    icon: <Award className="w-8 h-8 text-healthcare-primary" />,
    title: "Professional Growth",
    description: "Ongoing training and career advancement opportunities"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/20 to-healthcare-primary/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Join Our <span className="text-primary-light">Care Team</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in mb-8">
              Be part of a mission-driven organization that values compassion, excellence, and making a real difference in people's lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="btn-healthcare-secondary text-lg px-8 py-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Apply via Form
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-healthcare-teal">Job Application</DialogTitle>
                  </DialogHeader>
                  {/* Form content will be moved here */}
                </DialogContent>
              </Dialog>
              
              <Button className="btn-healthcare text-lg px-8 py-4 flex items-center gap-2" onClick={() => window.location.href = 'mailto:service.premierhealthcarega@gmail.com?subject=Job Application&body=Hello, I would like to apply for a position at Premier Healthcare of Georgia. Please find my resume attached.'}>
                <Mail className="w-5 h-5" />
                Apply via Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-healthcare-teal font-bold mb-4">Why Choose Premier Healthcare?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team where your skills are valued, your growth is supported, and your work makes a meaningful impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => <div key={index} style={{
            animationDelay: `${index * 0.1}s`
          }} className="healthcare-card text-center animate-fade-in bg-green-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-12 bg-healthcare-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-healthcare-teal font-bold mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're actively seeking compassionate professionals to join our growing team across Metro Atlanta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-healthcare-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{position}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Full-time & Part-time</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-1" />
                      <span>Competitive compensation</span>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Application Form */}
      

      <Footer />
    </div>;
};
export default Jobs;