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
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        contactForm.reset();
        toast({
          title: 'Message sent!',
          description: 'Thank you for contacting us.',
        });
      } else {
        const result = await res.json();
        toast({
          title: 'Failed to send message',
          description: result.message || 'Please try again.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again.',
        variant: 'destructive',
      });
    }
    setIsSubmittingContact(false);
  };
  const onSubmitNewsletter = async (data: z.infer<typeof newsletterSchema>) => {
    setIsSubmittingNewsletter(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        newsletterForm.reset();
        toast({
          title: 'Subscribed!',
          description: 'Please check your email for a welcome message.',
        });
      } else {
        const result = await res.json();
        toast({
          title: 'Error',
          description: result.message || 'Failed to subscribe.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
    setIsSubmittingNewsletter(false);
  };

  return (
    <ToastProvider>
  <div className="min-h-screen bg-white text-black dark:bg-[linear-gradient(135deg,_#223A5E_0%,_#111827_100%)] dark:text-white font-inter">
        <Nav activePage="connect" />
        <section id="connect" className="py-20 sm:py-32 bg-white dark:bg-[linear-gradient(135deg,_#223A5E_0%,_#111827_100%)] backdrop-blur-sm">
          <div className="container mx-auto px-4 pt-10 sm:pt-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-[#FFFBEA] mb-2 sm:mb-4 font-figtree">Connect & Engage</h2>
                <p className="text-base sm:text-lg text-black/80 dark:text-[#B7C9E2]">We'd love to hear from you and keep you updated</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Contact Form */}
                <Card className="p-6 bg-blue-100 border-blue-300 text-black dark:bg-[#223A5E]/80 dark:border-[#191970]/40 dark:text-[#FFFBEA] backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 font-figtree">Send Us a Message</h3>
                  <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" {...contactForm.register('name')} className={(contactForm.formState.errors.name ? 'border-red-500 ' : '') + 'text-black !dark:text-black'} />
                      {contactForm.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" {...contactForm.register('email')} className={(contactForm.formState.errors.email ? 'border-red-500 ' : '') + 'text-black !dark:text-black'} />
                      {contactForm.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Textarea placeholder="Prayer requests, questions, or how we can help..." rows={4} {...contactForm.register('message')} className={(contactForm.formState.errors.message ? 'border-red-500 ' : '') + 'text-black !dark:text-black'} />
                      {contactForm.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.message.message}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full bg-[#B7C9E2] text-[#223A5E] shadow-lg hover:bg-[#FFFBEA] transition-all duration-300" disabled={isSubmittingContact}>
                      <Send className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                      {isSubmittingContact ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
                {/* Newsletter Signup */}
                <Card className="p-6 bg-blue-100 border-blue-300 text-black dark:bg-[#223A5E]/80 dark:border-[#191970]/40 dark:text-[#FFFBEA] backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 font-figtree">Stay Updated</h3>
                  <p className="mb-6 text-black/80 dark:text-[#B7C9E2]">Subscribe to our newsletter for church updates, upcoming events, and weekly teachings.</p>
                  <form onSubmit={newsletterForm.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                    <div>
                      <Input type="email" placeholder="Your Email Address" {...newsletterForm.register('email')} className={(newsletterForm.formState.errors.email ? 'border-red-500 ' : '') + 'text-black !dark:text-black'} />
                      {newsletterForm.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{newsletterForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full bg-[#B7C9E2] text-[#223A5E] shadow-lg hover:bg-[#FFFBEA] transition-all duration-300" disabled={isSubmittingNewsletter}>
                      <Mail className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                      {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe to Newsletter'}
                    </Button>
                  </form>
                  <div className="mt-8 pt-6 border-t border-[#B7C9E2]/40">
                    <h4 className="font-semibold mb-3 font-figtree">Contact Info</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                        <span className="text-black dark:text-[#FFFBEA]">+251 926 141 414</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                        <span className="text-black dark:text-[#FFFBEA]">+251 978 430 990</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                        <span className="text-black dark:text-[#FFFBEA]">jslchurch8@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-900 dark:text-[#B7C9E2]" />
                        <span className="text-black dark:text-[#FFFBEA]">Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <ToastViewport />
      </div>
    </ToastProvider>
  );
}
