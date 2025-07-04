"use client"
import Image from "next/image";
import { useState, useRef } from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header with logo and text */}
      <header className="w-full flex items-center md:px-16 px-8 pt-12 pb-4 bg-black/5">
        {/* Elegant psychological consultancy logo SVG */}
        <div className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center mr-2">
          {/* Abstract brain/tree logo for psychological consultancy */}
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="30" cy="30" r="26" stroke="#6fa3a8" strokeWidth="2.5" fill="" />
            <path d="M30 44c-7-2-12-7-12-14 0-6 5-11 12-11s12 5 12 11c0 7-5 12-12 14z" fill="#b2c6c3" stroke="#6fa3a8" strokeWidth="2" />
            <path d="M30 44V19" stroke="#6fa3a8" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 32c-3-2-7-2-10 1" stroke="#6fa3a8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M30 36c2-2 6-2 9 1" stroke="#6fa3a8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="30" cy="25" r="2" fill="#6fa3a8" />
          </svg>
        </div>
        <div className="flex flex-col">
          <FadeInOnScroll><span className="text-[1.4rem] leading-none font-serif text-[#3a3a3a]"> Dr. Serena Blake</span></FadeInOnScroll>
          <FadeInOnScroll><span className="text-[1.4rem] leading-none font-serif text-[#3a3a3a]">Psychological Services</span></FadeInOnScroll>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full flex justify-center items-center" style={{ minHeight: "calc(100vh - 110px)" }}>
        {/* Background image: replace src with your actual ocean image for pixel-perfect match */}
        <div className="absolute px-2 sm:px-8 md:px-14 py-4 sm:py-8 md:py-10 pt-4 sm:pt-8 inset-0 w-full h-full z-0">
          <video src="/hero.mp4" autoPlay muted loop className="w-full h-full object-cover brightness-[0.8]" />
          <div className="absolute inset-0 bg-black/5" /> {/* Overlay for contrast */}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-2 sm:px-8 md:px-16 py-10 sm:py-20 md:py-28">
          <FadeInOnScroll><h1 className="font-freight-display-pro font-serif font-bold text-white text-center drop-shadow-md"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Psychological Care for <FadeInOnScroll><span className="font-freight-display-pro block mt-2 font-bold" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>Change, Insight, and Well-Being</span></FadeInOnScroll>
          </h1></FadeInOnScroll>
          <FadeInOnScroll><p className="font-freight-display-light mt-6 sm:mt-10 mx-4 sm:mx-6 text-white text-center"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.625rem)" }}
          >
            Offering individual psychotherapy for adults via telehealth in Michigan and <FadeInOnScroll><span className="underline">most U.S. states</span></FadeInOnScroll> through PSYPACT participation
          </p></FadeInOnScroll>
          <a
            href="#consultation"
            className="font-freight-sans-pro font-bold mt-12 hover:opacity-80 w-[280px] text-center bg-[#94b0b0] hover:bg-[#94b0b0] text-white text-base md:text-[1rem] rounded-[50%] px-14 py-4 sm:py-6 shadow-lg transition duration-300 tracking-[0.15em] leading-5"
          >
            BOOK A FREE CONSULT
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-16 lg:gap-24 py-10 sm:py-16 md:py-28 px-4 sm:px-8 md:px-16 lg:px-30 xl:px-40 xl:pl-44">
          <FadeInOnScroll><h2 className="text-left font-freight-display-pro block md:hidden font-semibold tracking-wide text-[#777] mb-6 md:mb-8"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >About Dr. Jennifer Hahm</h2></FadeInOnScroll>
          {/* Image on right for large, above for small */}
          <div className="order-1 md:order-2 w-full md:w-[40%] max-w-xs md:max-w-[40%] h-auto flex-shrink-0 flex justify-center md:justify-end mb-8 md:mb-0">
            <FadeInOnScroll><Image
              src="/profile.jpg"
              alt="Dr. Jennifer Hahm"
              width={400}
              height={500}
              className="object-cover w-full h-auto"
              priority
            /></FadeInOnScroll>
          </div>
          {/* Text content */}
          <div className="order-2 md:order-1 flex-1 w-full flex flex-col justify-center px-4">
            <FadeInOnScroll><h2 className="hidden md:block w-full font-freight-display-pro font-semibold tracking-wide text-[#777] mb-6 md:mb-8"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.1rem)" }}
            >About Dr. Serena Blake</h2></FadeInOnScroll>
            <FadeInOnScroll><p className="font-freight-sans-pro text-[#7a7a6c] mb-6 leading-8"
              style={{ fontSize: "clamp(1.05rem, 2.1vw, 1.25rem)", lineHeight: "clamp(1.7rem, 3vw, 2.2rem)" }}
            >
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p></FadeInOnScroll>
            <FadeInOnScroll><p className="font-freight-sans-pro text-[#7a7a6c] leading-relaxed"
              style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", lineHeight: "clamp(1.7rem, 3vw, 2.2rem)" }}
            >
              I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master&apos;s degree in Clinical Psychology from the Michigan School of Psychology and a Ph.D. in Counseling Psychology. My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
            </p></FadeInOnScroll>
          </div>
        </div>
        <hr className="border-1 border-[#aaa] mt-8 mb-12 w-9/10" />
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#f8f6ef] py-8 sm:py-8 md:py-12 px-2 sm:px-10 md:px-20 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-8 sm:mb-12 md:mb-22">
          <FadeInOnScroll className="flex justify-center"><h3 className="font-freight-display-light text-[#555] w-9/10 md:w-[60%] text-center mb-4 sm:mb-8"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.4rem)" }}
          >
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </h3></FadeInOnScroll>
          <FadeInOnScroll className="flex justify-center"><p className="font-freight-sans-pro text-[#222] text-lg md:text-[20px] text-center max-w-full w-[90%] md:max-w-[72%] mb-4 sm:mb-8 leading-7 sm:leading-8">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you&apos;t have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
          </p></FadeInOnScroll>
          <hr className="w-full border-1 border-[#aaa] mt-8" />
        </div>
        <FadeInOnScroll><h2 className="font-freight-display-light font-freight-display-pro text-[#555] mb-8 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)" }}
        >Areas of Focus</h2></FadeInOnScroll>
        <div className="w-full max-w-[85%] md:max-w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-20 md:gap-20">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <FadeInOnScroll>
              <div className="w-full mb-4 rounded-full overflow-hidden shadow-lg">
                <Image src="/service-1.jpg" alt="Therapy for Healthcare Providers and Students" className="w-full aspect-square object-cover" width={400} height={400} />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll><h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Anxiety & Stress Management </h3></FadeInOnScroll>
            <FadeInOnScroll><p className="font-freight-sans-pro text-black text-base leading-7">
              Learn practical strategies to manage anxiety and stress, whether it stems from work, relationships, or daily life. Together, we&rsquo;ll identify triggers and build coping skills to help you feel more balanced and in control. Therapy provides a supportive space to foster resilience and lasting calm.
            </p></FadeInOnScroll>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <FadeInOnScroll>
              <div className="w-full mb-4 rounded-full overflow-hidden shadow-lg">
                <Image src="/service-2.jpg" alt="Therapy for Trauma and Grief" className="w-full aspect-square object-cover" width={400} height={400} />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll><h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Relationship Counseling</h3></FadeInOnScroll>
            <FadeInOnScroll><p className="font-freight-sans-pro text-black text-base leading-7">
              Strengthen your relationships and improve communication with those who matter most. We&rsquo;ll address patterns that create conflict or distance, and work toward building trust, understanding, and deeper connection. Counseling is tailored to your unique relationship needs and goals.
            </p></FadeInOnScroll>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <FadeInOnScroll><div className="w-full mb-4 rounded-full overflow-hidden shadow-lg">
              <Image src="/service-3.jpg" alt="Therapy for Second Generation Individuals In Immigrant Families" className="w-full aspect-square object-cover" width={400} height={400} />
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll><h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Trauma Recovery</h3></FadeInOnScroll>
            <FadeInOnScroll><p className="font-freight-sans-pro text-black text-base leading-7">
              Heal from trauma and reclaim your sense of safety and self-worth. Therapy offers a compassionate space to process difficult experiences, reduce distress, and move forward at your own pace. You&rsquo;ll gain tools to manage symptoms and foster personal growth.
            </p></FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Rates and Insurance Section */}
      <section className="w-full bg-[#97b1b1] py-8 sm:py-10 md:py-14 px-2 px-8 md:px-44 flex flex-col items-center justify-center">
        <FadeInOnScroll><h2 className="font-freight-display-light text-[#000] mb-4 sm:mb-8 text-center"
          style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)" }}
        >Rates and Insurance</h2></FadeInOnScroll>
        <div className="flex flex-col items-center text-[#000] w-full">
          <FadeInOnScroll><p className="font-freight-sans-pro text-base text-lg mb-2 sm:mb-4 md:mb-6 text-center">Individual session fee - $200</p></FadeInOnScroll>
          <FadeInOnScroll><p className="font-freight-sans-pro text-base text-lg mb-2 sm:mb-4 md:mb-6 text-center">Couples session fee - $240</p></FadeInOnScroll>
          <FadeInOnScroll><p className="font-freight-sans-pro text-base text-lg mb-2 sm:mb-4 md:mb-6 text-center">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p></FadeInOnScroll>
          <FadeInOnScroll><p className="font-freight-sans-pro text-lg md:text-xl text-center w-full">
            For out-of-network plans, I&apos;ve partnered with Mentaya using <a href="https://app.mentaya.com/p/U4Q2Q0Q0Q0" target="_blank" rel="noopener noreferrer" className="underline">this tool</a> to help you check your eligibility for reimbursement for my services.
          </p></FadeInOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Quote Section */}
      <section className="w-full relative flex items-center justify-center py-6 sm:py-10">
        <div className="absolute w-full h-full z-0">
          <Image src="/sea.png" alt="Ocean background" className="w-full h-full object-cover object-top" width={1200} height={400} />
          <div className="" />
        </div>
        <div className="relative z-10 w-full max-w-[60%] flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-20">
          <FadeInOnScroll><blockquote className="font-freight-display-light leading-8 sm:leading-12 text-[#222] text-2xl md:text-4xl text-center w-full mx-auto mb-4 sm:mb-8">
            &quot;I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.&quot;
          </blockquote></FadeInOnScroll>
          <FadeInOnScroll><span className="font-freight-sans-pro text-[#000] text-base sm:text-lg md:text-xl text-center">— Audre Lorde</span></FadeInOnScroll>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#f3f0e7] text-[#000] pt-6 sm:pt-10 md:pt-12 pb-4 sm:pb-6 flex flex-col items-center justify-center">
        <FadeInOnScroll><h2 className="font-freight-display-light text-xl sm:text-3xl md:text-4xl mb-4 sm:mb-10 text-center"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.7rem)" }}
        >Dr. Serena Blake, PsyD (Clinical Psychologist)</h2></FadeInOnScroll>
        <div className="flex flex-col items-center text-base sm:text-xl font-freight-sans-pro mb-2">
          <FadeInOnScroll><a href="mailto:jennifer@drjenniferhahm.com" className="underline mb-1 text-base sm:text-xl">serena@blakepsychology.com</a></FadeInOnScroll>
          <FadeInOnScroll><span>Phone: <a href="tel:2489398150" className="underline">(323) 555-0192</a></span></FadeInOnScroll>
          <FadeInOnScroll><span className="mt-2 sm:mt-4">1287 Maplewood Drive, Los Angeles, CA 90026</span></FadeInOnScroll>
        </div>
        <nav className="flex flex-row flex-wrap items-center text-black justify-center gap-2 mt-2 sm:mt-4 mb-6 sm:mb-14 text-md font-freight-sans-pro">
          <FadeInOnScroll><a href="#" className="underline">Home</a></FadeInOnScroll>
          <FadeInOnScroll><a href="#" className="underline">Privacy Policy</a></FadeInOnScroll>
          <FadeInOnScroll><a href="#" className="underline">Good Faith Estimate</a></FadeInOnScroll>
        </nav>
        <div className="mb-4 sm:mb-8">
          <FadeInOnScroll><a href="#" className="underline text-base sm:text-lg text-black font-freight-sans-pro">Client Portal</a></FadeInOnScroll>
        </div>
        <FadeInOnScroll><div className="text-base font-freight-sans-pro text-lg mt-4 sm:mt-8 text-center">
          © 2025 Dr. Serena Blake. Psychological Services, PLLC. All rights reserved.
        </div></FadeInOnScroll>
      </footer>
    </div>
  );
}

// FAQ Section Component
const faqData = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white text-[#4a6a7b] py-10 sm:py-16 md:py-24 px-6 md:px-8 flex flex-col items-center justify-center">
      <FadeInOnScroll><h2 className="font-freight-display-light text-2xl sm:text-4xl md:text-5xl mb-6 sm:mb-12 text-center"
        style={{ fontSize: "clamp(1.9rem, 3vw, 3rem)" }}
      >Frequently Asked Questions</h2></FadeInOnScroll>
      <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl">
        <FadeInOnScroll><h3 className="font-freight-display-light text-xl sm:text-3xl mb-4 sm:mb-8"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
        >Therapy</h3></FadeInOnScroll>
        {faqData.map((item, idx) => (
          <div key={idx}>
            <button
              className="flex cursor-pointer items-center w-full py-4 text-left font-freight-sans-pro text-xl border-0 border-b border-[#b5c6d3] focus:outline-none transition-colors group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <FadeInOnScroll><span className="mr-4 flex items-center justify-center w-8 h-8 rounded-full border border-[#b5c6d3] text-[#4a6a7b] text-lg transition-transform group-aria-expanded:rotate-90">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 4.5L11.5 9L6.5 13.5" stroke="#4a6a7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span></FadeInOnScroll>
              <FadeInOnScroll><span className="flex-1 text-2xl font-freight-display-light">{item.question}</span></FadeInOnScroll>
            </button>
            {openIndex === idx && (
              <FadeInOnScroll><div className="pl-4 sm:pl-8 md:pl-12 mt-2 pr-2 sm:pr-4 pb-4 sm:pb-6 text-2xl font-freight-display-light animate-fade-in">
                {item.answer}
              </div></FadeInOnScroll>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Form Section Component
function ContactFormSection() {
  interface FormValues {
    name: string;
    phone: string;
    email: string;
    message: string;
    time: string;
    method: string;
    agree: boolean;
  }
  interface FormTouched {
    name: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
    time: boolean;
    method: boolean;
    agree: boolean;
  }
  interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    time?: string;
    method?: string;
    agree?: string;
  }

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    method: "",
    agree: false,
  });
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    phone: false,
    email: false,
    message: false,
    time: false,
    method: false,
    agree: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const RECAPTCHA_SITE_KEY = "6LdKQncrAAAAALxpw0EqHn4Gn1KIT0dhoXGXQu-8";
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Dynamically import reCAPTCHA to avoid SSR issues
  const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

  function validate(values: FormValues): FormErrors {
    const errors: FormErrors = {};
    if (!values.name) errors.name = "Name is required.";
    if (!values.phone) errors.phone = "Phone is required.";
    else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
    if (!values.email) errors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = "Enter a valid email address.";
    if (!values.message) errors.message = "This field is required.";
    if (!values.time) errors.time = "This field is required.";
    if (!values.method) errors.method = "Please select a contact method.";
    if (!values.agree) errors.agree = "You must agree to be contacted.";
    return errors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setValues((v) => ({ ...v, [name]: checked }));
    } else {
      setValues((v) => ({ ...v, [name]: value }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...values, [name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    setRecaptchaError(null);
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
      time: true,
      method: true,
      agree: true,
    });
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA.");
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic here, include recaptchaToken
      alert("Form submitted! reCAPTCHA token: " + recaptchaToken);
      // You should send the token to your backend for verification
    }
  }

  return (
    <section className="w-full bg-[#f7f9fa] py-10 sm:py-16 md:py-24 px-10 sm:px-12 flex flex-col items-center justify-center">
      <div className="w-full md:w-[60%] bg-white border border-[#29543a] rounded-xl shadow-sm p-4 sm:p-8 md:p-12 flex flex-col items-center" style={{ boxShadow: '0 2px 16px 0 rgba(44,62,80,0.04)' }}>
        <FadeInOnScroll><h2 className="font-freight-display-medium font-freight-display-pro text-[#555] mb-2"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)" }}
        >Get In Touch</h2></FadeInOnScroll>
        <p className="font-freight-display-medium text-[#222] text-lg mb-8 text-center"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
        >Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.</p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit} noValidate ref={formRef}>
          <label className="font-freight-display-medium text-[#222] text-lg mt-2">Name
            <span className="text-[#e53e3e] ml-1">*</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#29543a] rounded-md px-4 py-2 text-lg font-freight-display-medium placeholder-[#b2b2b2] focus:outline-none focus:ring-2 focus:ring-[#29543a]"
            />
            {(touched.name || submitAttempted) && errors.name && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{errors.name}</span>
            )}
          </label>
          <label className="font-freight-display-medium  text-[#222] text-lg">Phone
            <span className="text-[#e53e3e] ml-1">*</span>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 234-5678"
              required
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#29543a] rounded-md px-4 py-2 text-lg font-freight-display-medium placeholder-[#b2b2b2] focus:outline-none focus:ring-2 focus:ring-[#29543a]"
            />
            {(touched.phone || submitAttempted) && errors.phone && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{errors.phone}</span>
            )}
          </label>
          <label className="font-freight-display-medium  text-[#222] text-lg">Email
            <span className="text-[#e53e3e] ml-1">*</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#29543a] rounded-md px-4 py-2 text-lg font-freight-display-medium placeholder-[#b2b2b2] focus:outline-none focus:ring-2 focus:ring-[#29543a]"
            />
            {(touched.email || submitAttempted) && errors.email && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{errors.email}</span>
            )}
          </label>
          <label className="font-freight-display-medium  text-[#222] text-lg">What brings you here?
            <span className="text-[#e53e3e] ml-1">*</span>
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows={3}
              required
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#29543a] rounded-md px-4 py-2 text-lg font-freight-display-medium placeholder-[#b2b2b2] focus:outline-none focus:ring-2 focus:ring-[#29543a] resize-none"
            />
            {(touched.message || submitAttempted) && errors.message && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{errors.message}</span>
            )}
          </label>
          <label className="font-freight-display-medium  text-[#222] text-lg">Preferred time to reach you
            <span className="text-[#e53e3e] ml-1">*</span>
            <input
              type="text"
              name="time"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              required
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#29543a] rounded-md px-4 py-2 text-lg font-freight-display-medium placeholder-[#b2b2b2] focus:outline-none focus:ring-2 focus:ring-[#29543a]"
            />
            <span className="text-[#222] text-sm mt-1">Let us know when you&apos;re typically available for a call or consultation</span>
            {(touched.time || submitAttempted) && errors.time && (
              <span className="text-red-500 text-sm mt-1 block">{errors.time}</span>
            )}
          </label>
          <label className="font-freight-display-medium  text-[#222] text-lg">Preferred Contact Method
            <span className="text-[#e53e3e] ml-1">*</span>
            <select
              name="method"
              required
              value={values.method}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full border border-[#222] rounded-md px-4 py-2 text-lg font-freight-display-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#29543a]"
            >
              <option value="">Select preferred method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
            </select>
            {(touched.method || submitAttempted) && errors.method && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{errors.method}</span>
            )}
          </label>
          <label className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="w-5 h-5 mr-2"
                required
                checked={values.agree}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-[#222] font-freight-display-medium text-lg">I agree to be contacted</span>
            </div>
            {(touched.agree || submitAttempted) && errors.agree && (
              <span className="text-[#e53e3e] font-freight-display-pro text-sm block mt-1">{errors.agree}</span>
            )}
          </label>
          {/* Google reCAPTCHA v2 Checkbox */}
          <div className="w-full flex flex-col items-center my-2">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={token => setRecaptchaToken(token)}
            />
            {recaptchaError && (
              <span className="text-[#e53e3e] text-sm mt-1 block">{recaptchaError}</span>
            )}
          </div>
          <button type="submit" className="w-full bg-[#29543a] cursor-pointer hover:bg-[#1e3d2a] text-white text-lg font-freight-display-pro rounded-md py-3 mt-2 mb-1 transition-colors">Submit</button>
          <div className="flex items-start mt-2">
            <span className="text-[#222] text-xl mr-2">ⓘ</span>
            <span className="text-[#222] font-freight-display-medium text-xl">By clicking submit you consent to receive texts and emails from Dr. Serena Blake.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
