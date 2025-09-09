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
  certifications: z.string().optional(),
  coverLetter: z.string().min(50, 'Please provide a cover letter (minimum 50 characters)'),
  resume: z.string().min(1, 'Please upload your resume'),
  previousExperience: z.string().min(10, 'Please provide details about your previous experience'),
  whyInterested: z.string().min(10, 'Please tell us why you are interested in this position'),
  references: z.string().min(10, 'Please provide at least one reference'),
  backgroundCheck: z.boolean().refine((val) => val === true, 'You must consent to background check'),
  drugTest: z.boolean().refine((val) => val === true, 'You must consent to drug testing'),
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
      certifications: '',
      coverLetter: '',
      resume: '',
      previousExperience: '',
      whyInterested: '',
      references: '',
      backgroundCheck: false,
      drugTest: false,
    },
  });

  const onSubmit = async (data: JobApplicationForm) => {
    setIsSubmitting(true);
    try {
      // Transform data for email service
      const emailData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        county: `${data.city}, ${data.state} ${data.zipCode}`, // Using city/state as county field
        careType: [data.position], // Using position as careType for compatibility
        urgency: data.experience, // Using experience as urgency for compatibility
        message: `APPLICATION DETAILS:
Address: ${data.address}, ${data.city}, ${data.state} ${data.zipCode}
Position Applied For: ${data.position}
Experience Level: ${data.experience}
Availability: ${data.availability.join(', ')}
Certifications: ${data.certifications || 'None specified'}

Cover Letter:
${data.coverLetter}

Resume: ${data.resume}

Previous Experience:
${data.previousExperience}

Why Interested:
${data.whyInterested}

References:
${data.references}`,
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

  const positions = [
    'Certified Nursing Assistant (CNA)',
    'Personal Care Assistant (PCA)',
    'Companion & Sitter',
    'Registered Nurse (RN)',
    'Licensed Practical Nurse (LPN)',
    'Home Health Aide (HHA)',
  ];

  const experienceLevels = [
    'Entry Level (0-1 years)',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years',
  ];

  const availabilityOptions = [
    'Full-time (40+ hours/week)',
    'Part-time (20-39 hours/week)',
    'Weekdays',
    'Weekends',
    'Evenings',
    'Overnight shifts',
    'On-call',
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-healthcare-primary" />,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every day"
    },
    {
      icon: <Users className="w-8 h-8 text-healthcare-secondary" />,
      title: "Supportive Team",
      description: "Join a caring team that values your contribution"
    },
    {
      icon: <Shield className="w-8 h-8 text-healthcare-teal" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, paid time off, and more"
    },
    {
      icon: <Award className="w-8 h-8 text-healthcare-primary" />,
      title: "Professional Growth",
      description: "Ongoing training and career advancement opportunities"
    }
  ];

  return (
    <div className="min-h-screen">
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
              
              <Button 
                className="btn-healthcare text-lg px-8 py-4 flex items-center gap-2"
                onClick={() => window.location.href = 'mailto:service.premierhealthcarega@gmail.com?subject=Job Application&body=Hello, I would like to apply for a position at Premier Healthcare of Georgia. Please find my resume attached.'}
              >
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
            {benefits.map((benefit, index) => (
              <div key={index} className="healthcare-card text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-padding bg-healthcare-accent">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-healthcare-teal font-bold mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're actively seeking compassionate professionals to join our growing team across Metro Atlanta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/5 to-healthcare-primary/5"></div>
        <div className="container-custom relative z-10">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-healthcare-teal mb-6">Job Application</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-healthcare-teal mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your state" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your zip code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Position Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-healthcare-teal mb-6">Position Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position Applying For *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {positions.map((position) => (
                                  <SelectItem key={position} value={position}>
                                    {position}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {experienceLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="certifications"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Certifications & Licenses</FormLabel>
                            <FormControl>
                              <Input placeholder="List any relevant certifications or licenses" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Cover Letter & Resume */}
                  <div>
                    <h3 className="text-xl font-semibold text-healthcare-teal mb-6">Application Materials</h3>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please write a cover letter explaining your interest in this position and why you would be a good fit for our team..."
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resume *</FormLabel>
                            <FormControl>
                              <div className="flex items-center space-x-2">
                                <Input 
                                  type="file" 
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      field.onChange(file.name);
                                    }
                                  }}
                                  className="hidden" 
                                  id="resume-upload"
                                />
                                <label 
                                  htmlFor="resume-upload" 
                                  className="flex items-center justify-center px-4 py-2 bg-healthcare-accent border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                  <Upload className="w-4 h-4 mr-2" />
                                  Choose File
                                </label>
                                <span className="text-sm text-gray-600">
                                  {field.value || 'No file selected'}
                                </span>
                              </div>
                            </FormControl>
                            <p className="text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="text-xl font-semibold text-healthcare-teal mb-6">Availability *</h3>
                    <FormField
                      control={form.control}
                      name="availability"
                      render={() => (
                        <FormItem>
                          <div className="grid md:grid-cols-2 gap-4">
                            {availabilityOptions.map((option) => (
                              <FormField
                                key={option}
                                control={form.control}
                                name="availability"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={option}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(option)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, option])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== option
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {option}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="previousExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Healthcare Experience *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your previous healthcare or caregiving experience, including relevant skills and responsibilities..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whyInterested"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Why are you interested in this position? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us what motivates you to work in healthcare and why you want to join our team..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="references"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>References *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide at least one professional reference with name, relationship, phone number, and email..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Consent */}
                  <div>
                    <h3 className="text-xl font-semibold text-healthcare-teal mb-6">Required Consent</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="backgroundCheck"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I consent to a background check as required for employment *
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="drugTest"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I consent to drug testing as required for employment *
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="btn-healthcare w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;