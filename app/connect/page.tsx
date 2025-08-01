"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin, Cross } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/nav";

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export default function ConnectPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activePage, setActivePage] = useState("connect");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") setActivePage("home");
      else if (path.startsWith("/about")) setActivePage("about");
      else if (path.startsWith("/sermons")) setActivePage("sermons");
      else if (path.startsWith("/connect")) setActivePage("connect");
      else if (window.location.pathname === "/visit") setActivePage("visit");
    }
  }, []);
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });
  const newsletterForm = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const onSubmitContact = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmittingContact(true);
    // Add your API logic here
    setTimeout(() => setIsSubmittingContact(false), 1000);
  };
  const onSubmitNewsletter = async (data: z.infer<typeof newsletterSchema>) => {
    setIsSubmittingNewsletter(true);
    // Add your API logic here
    setTimeout(() => setIsSubmittingNewsletter(false), 1000);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#223A5E_0%,_#111827_100%)]">
      <Nav activePage="connect" />

      <section id="connect" className="py-20 sm:py-32 bg-[linear-gradient(135deg,_#223A5E_0%,_#111827_100%)] backdrop-blur-sm">
        <div className="container mx-auto px-4 pt-10 sm:pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFFBEA] mb-2 sm:mb-4">Connect & Engage</h2>
              <p className="text-base sm:text-lg text-[#B7C9E2]">We'd love to hear from you and keep you updated</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Form */}
              <Card className="p-6 bg-[#223A5E]/80 border-[#191970]/40 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#FFFBEA] mb-4">Send Us a Message</h3>
                <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" {...contactForm.register('name')} className={contactForm.formState.errors.name ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" {...contactForm.register('email')} className={contactForm.formState.errors.email ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea placeholder="Prayer requests, questions, or how we can help..." rows={4} {...contactForm.register('message')} className={contactForm.formState.errors.message ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.message.message}</p>
                    )}
                  </div>
                  <button type="button" className="w-full bg-[#FFFBEA] text-[#223A5E] shadow-lg hover:bg-[#F6E7C1] transition-all duration-300 rounded-lg font-medium py-2 px-4" onClick={() => { alert('Contact form button clicked!'); }}>
                    <Send className="w-4 h-4 mr-2 inline" />
                    Test Contact Button
                  </button>
                  <Button type="submit" className="w-full bg-[#B7C9E2] text-[#223A5E] shadow-lg hover:bg-[#FFFBEA] transition-all duration-300" disabled={isSubmittingContact}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmittingContact ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
              {/* Newsletter Signup */}
              <Card className="p-6 bg-[#223A5E]/80 border-[#191970]/40 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#FFFBEA] mb-4">Stay Updated</h3>
                <p className="text-[#B7C9E2] mb-6">Subscribe to our newsletter for church updates, upcoming events, and weekly teachings.</p>
                <form onSubmit={newsletterForm.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                  <div>
                    <Input type="email" placeholder="Your Email Address" {...newsletterForm.register('email')} className={newsletterForm.formState.errors.email ? 'border-red-500' : ''} />
                    {newsletterForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{newsletterForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full bg-[#B7C9E2] text-[#223A5E] shadow-lg hover:bg-[#FFFBEA] transition-all duration-300" disabled={isSubmittingNewsletter}>
                    <Mail className="w-4 h-4 mr-2" />
                    {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </Button>
                </form>
                <div className="mt-8 pt-6 border-t border-[#B7C9E2]/40">
                  <h4 className="font-semibold text-[#FFFBEA] mb-3">Contact Info</h4>
                  <div className="space-y-2 text-sm text-[#FFFBEA]">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-[#B7C9E2]" />
                      <span className="text-[#FFFBEA]">+251 926 141 414</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-[#B7C9E2]" />
                      <span className="text-[#FFFBEA]">+251 947 153 805</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-[#B7C9E2]" />
                      <span className="text-[#FFFBEA]">your-church-email@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#B7C9E2]" />
                      <span className="text-[#FFFBEA]">Kolfe Keraniyo Sub City, Asko-Addis Sefer Condominium Area, Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Extra scrollable content: cards and text */}
    </div>
  );
}
