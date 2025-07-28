import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Being part of this church has strengthened my walk with Christ and reminded me that spiritual growth doesn’t happen in isolation  it flourishes in community.",
      name: "Architect Dagimawi Luelkal",
      designation: "Sound man, Musician, Architect",
      src: "/photo_2025-07-16_01-54-31.jpg",
    },
    {
      quote:
        "I used to attend church, but now I am the church. Serving here has given me purpose, clarity, and a deeper connection to what God is doing in our city. ",
      name: "Doctor Saron Leulkal",
      designation: "Doctor ",
      src: "/photo_2025-07-16_01-54-53.jpg",
    },
    {
      quote:
        "This church has become my second home. It’s where I’ve grown as a leader, been mentored in my faith, and discovered the joy of pouring into others. ",
      name: "Chimsa Bekele",
      designation: "Software Engineer",
      src: "/photo_2025-07-16_01-56-54.jpg",
    },
    {
      quote:
        "Every time I step into this place, I’m reminded that I’m not alone. We carry each other’s burdens, celebrate each other’s victories, and pursue God together.",
      name: "Entrepreneur Zerihun",
      designation: "Entrepreneur, Business management",
      src: "/photo_2025-07-16_01-59-20.jpg",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;

}
