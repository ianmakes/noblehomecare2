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
      // Netlify Form Submission
      const netlifyData = new URLSearchParams();
      netlifyData.append("form-name", "jobs");
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          netlifyData.append(key, value.join(', '));
        } else {
          netlifyData.append(key, value.toString());
        }
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyData.toString(),
      });

      // Transform data for email service
      const emailData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        county: `${data.city}, ${data.state} ${data.zipCode}`,
        careType: [data.position],
        urgency: data.experience,
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

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-healthcare-green" />,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every day"
    },
    {
      icon: <Users className="w-8 h-8 text-healthcare-gold" />,
      title: "Supportive Team",
      description: "Join a caring team that values your contribution"
    },
    {
      icon: <Shield className="w-8 h-8 text-healthcare-green" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, paid time off, and more"
    },
    {
      icon: <Award className="w-8 h-8 text-healthcare-gold" />,
      title: "Professional Growth",
      description: "Ongoing training and career advancement opportunities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="healthcare-gradient text-white min-h-[45vh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-teal/20 to-healthcare-primary/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
              Join Our <span className="text-healthcare-gold">Care Team</span>
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
                <DialogContent className="sm:max-w-[1000px] max-h-[95vh] overflow-y-auto border-t-8 border-healthcare-gold shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-healthcare-teal">Job Application</DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" name="jobs" data-netlify="true">
                      <input type="hidden" name="form-name" value="jobs" />
                      {/* Personal Information Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold text-healthcare-green border-b border-healthcare-green/20 pb-2">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-healthcare-green font-semibold">First Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
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
                                <FormLabel className="text-healthcare-green font-semibold">Last Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
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
                                <FormLabel className="text-healthcare-green font-semibold">Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
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
                                <FormLabel className="text-healthcare-green font-semibold">Phone Number *</FormLabel>
                                <FormControl>
                                  <Input type="tel" {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Address Information Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold text-healthcare-green border-b border-healthcare-green/20 pb-2">Address Information</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-healthcare-green font-semibold">Street Address *</FormLabel>
                                <FormControl>
                                  <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-healthcare-green font-semibold">City *</FormLabel>
                                  <FormControl>
                                    <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
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
                                  <FormLabel className="text-healthcare-green font-semibold">State *</FormLabel>
                                  <FormControl>
                                    <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
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
                                  <FormLabel className="text-healthcare-green font-semibold">Zip Code *</FormLabel>
                                  <FormControl>
                                    <Input {...field} className="border-healthcare-green/20 focus:border-healthcare-gold" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Position and Experience Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold text-healthcare-green border-b border-healthcare-green/20 pb-2">Position & Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="position"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-healthcare-green font-semibold">Position Applied For *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-healthcare-green/20 focus:border-healthcare-gold">
                                      <SelectValue placeholder="Select position" />
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
                                <FormLabel className="text-healthcare-green font-semibold">Experience Level *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-healthcare-green/20 focus:border-healthcare-gold">
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
                        </div>
                      </div>

                      {/* Work Location & Availability Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold text-healthcare-green border-b border-healthcare-green/20 pb-2">Availability & Location</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <FormField
                            control={form.control}
                            name="availability"
                            render={() => (
                              <FormItem>
                                <FormLabel className="text-healthcare-green font-semibold">Availability *</FormLabel>
                                <div className="grid grid-cols-2 gap-2">
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
                                            <FormLabel className="text-[10px] md:text-xs font-normal cursor-pointer">
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

                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="workAnywhereInGeorgia"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-healthcare-green font-semibold">Work anywhere in GA? *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="border-healthcare-green/20 focus:border-healthcare-gold">
                                          <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="willingToTravel"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-healthcare-green font-semibold">Willing to travel? *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="border-healthcare-green/20 focus:border-healthcare-gold">
                                          <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>

                        <FormField
                          control={form.control}
                          name="countiesCanWork"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-healthcare-green font-semibold">Which counties can you work in?</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="List counties you can work in" className="border-healthcare-green/20 focus:border-healthcare-gold" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Demographics Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-healthcare-teal border-b border-healthcare-teal/20 pb-2">Demographics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="education"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Education Level *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select education level" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {educationLevels.map((level) => (
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
                            name="gender"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Gender *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="non-binary">Non-binary</SelectItem>
                                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="ethnicity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ethnicity *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select ethnicity" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {ethnicityOptions.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
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
                          name="languagesSpoken"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Languages Spoken *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="List all languages you speak fluently" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="certifications"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Certifications</FormLabel>
                              <FormControl>
                                <Textarea {...field} placeholder="List any relevant certifications (CNA, CPR, First Aid, etc.)" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Documents Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-healthcare-teal border-b border-healthcare-teal/20 pb-2">Documents & Experience</h3>
                        <FormField
                          control={form.control}
                          name="coverLetter"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cover Letter *</FormLabel>
                              <FormControl>
                                <Textarea {...field} placeholder="Tell us why you want to work with Noble Homecare Agency..." rows={4} />
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
                                <Textarea {...field} placeholder="Please paste your resume text here or provide a link to your resume..." rows={6} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="previousExperience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous Healthcare Experience *</FormLabel>
                              <FormControl>
                                <Textarea {...field} placeholder="Describe your previous healthcare or caregiving experience..." rows={4} />
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
                                <Textarea {...field} placeholder="Tell us what motivates you to work in healthcare..." rows={3} />
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
                              <FormLabel>Professional References *</FormLabel>
                              <FormControl>
                                <Textarea {...field} placeholder="Please provide at least 2 professional references with name, relationship, and contact information..." rows={4} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Consent Section */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-healthcare-teal border-b border-healthcare-teal/20 pb-2">Consent & Authorization</h3>
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
                                  I consent to a background check *
                                </FormLabel>
                                <FormMessage />
                              </div>
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
                                  I consent to drug testing *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="w-full btn-healthcare" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
              
              <Button className="btn-healthcare text-lg px-8 py-4 flex items-center gap-2" onClick={() => window.location.href = 'mailto:info@noblehomecareagency.com?subject=Job Application&body=Hello, I would like to apply for a position at Noble Homecare Agency. Please find my resume attached.'}>
                <Mail className="w-5 h-5" />
                Apply via Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section - Light Mint Background */}
      <section className="section-padding bg-healthcare-green/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-healthcare-green mb-4">
              Why Work With <span className="text-healthcare-gold">Noble Homecare Agency</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a team that truly values your contribution and provides the support you need to excel in your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-b-4 border-healthcare-gold">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-healthcare-green mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions Section - White Background */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-healthcare-green mb-4">
              Available <span className="text-healthcare-gold">Positions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're always looking for compassionate healthcare professionals to join our growing team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-l-8 border-healthcare-gold">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-healthcare-green mr-3" />
                  <h3 className="text-xl font-serif font-bold text-healthcare-green">{position}</h3>
                </div>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Full-time & Part-time available</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span>Competitive pay & benefits</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Join our compassionate care team and make a meaningful difference in the lives of our clients while building a rewarding career.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="healthcare-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Healthcare Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Noble Homecare Agency and become part of a team that's dedicated to providing exceptional care and making a real difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => setIsDialogOpen(true)} className="btn-healthcare-secondary text-lg px-8 py-4">
              Apply Now
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-healthcare-teal" onClick={() => window.location.href = 'tel:470-210-7666'}>
              Call Us: 470-210-7666
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;