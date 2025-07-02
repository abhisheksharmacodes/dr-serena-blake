"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header with logo and text */}
      <header className="w-full flex items-center px-16 pt-12 pb-4 bg-black/5">
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
          {/* Use font-serif for Playfair Display or add custom font in globals.css */}
          <span className="text-[1.4rem] leading-none font-serif text-[#3a3a3a]"> Dr. Serena Blake</span>
          <span className="text-[1.4rem] leading-none font-serif text-[#3a3a3a]">Psychological Services</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full flex justify-center items-center" style={{ minHeight: "calc(100vh - 110px)" }}>
        {/* Background image: replace src with your actual ocean image for pixel-perfect match */}
        <div className="absolute px-14 py-10 pt-8 inset-0 w-full h-full z-0">
          <video src="/hero.mp4" autoPlay muted loop className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/5" /> {/* Overlay for contrast */}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-16 py-28">
          <h1 className="font-freight-display-pro font-serif font-semibold text-white text-base/6 leading-40 text-center font-serif text-3xl sm:text-xl md:text-6xl drop-shadow-md">
            Psychological Care for <span className="font-freight-display-pro block mt-2 text-3xl sm:text-5xl md:text-6xl font-bold">Change, Insight, and Well-Being</span>
          </h1>
          <p className="font-freight-display-pro mt-10 mx-6 text-white text-md sm:text-xl md:text-[23px] text-center">
            Offering individual psychotherapy for adults via telehealth in Michigan and <span className="underline">most U.S. states</span> through PSYPACT participation
          </p>
          <a
            href="#consultation"
            className="font-freight-sans-bold-sc mt-12 w-[280px] text-center bg-[#94b0b0] hover:bg-[#94b0b0] text-white text-lg font-semibold rounded-[50%] px-14 py-8 shadow-lg transition-colors duration-200 font-serif tracking-wide leading-5"
            style={{ letterSpacing: "0.05em" }}
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full flex flex-col md:flex-row bg-[#f8f8f3] py-40 pr-40 pl-52">
        <div className="md:w-1/2 flex-1 w-full md:pr-12 mb-10 md:mb-0">
          <h2 className="font-freight-display-pro text-[#8d8a6f] text-3xl md:text-4xl mb-8">About Dr. Serena Blake</h2>
          <p className="font-freight-sans-pro text-[#7a7a6c] text-[1.2rem] mb-6 leading-8">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <p className="font-freight-sans-pro text-[#7a7a6c] text-[1.2rem] leading-relaxed">
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master's degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
          </p>
        </div>
        <div className="w-[400px] flex justify-center md:justify-start relative h-content">
          <Image
            src="/profile.webp"
            alt="Dr. Jennifer Hahm"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#f8f6ef] py-24 px-20 md:px-18 flex flex-col items-center">
        <h2 className="font-freight-display-light font-freight-display-pro text-[#8d8a6f] text-4xl md:text-5xl mb-32">Area of Focus</h2>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-80 h-80 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src="/service-1.jpg" alt="Therapy for Healthcare Providers and Students" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Anxiety & Stress Management </h3>
            <p className="font-freight-sans-pro text-[#656565] text-base leading-7">
              The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-80 h-80 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src="/service-2.jpg" alt="Therapy for Trauma and Grief" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Relationship Counseling</h3>
            <p className="font-freight-sans-pro text-[#656565] text-base leading-7">
              Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-80 h-80 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src="/service-3.jpg" alt="Therapy for Second Generation Individuals In Immigrant Families" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-freight-display-light text-[#202020] text-[25px] mb-4">Trauma Recovery</h3>
            <p className="font-freight-sans-pro text-[#656565] text-base leading-7">
              Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.
            </p>
          </div>
        </div>
      </section>

      {/* Rates and Insurance Section */}
      <section className="w-full bg-[#97b1b1] py-14 px-44 flex flex-col items-center justify-center">
        <h2 className="font-freight-display-pro text-[#222] text-3xl md:text-4xl mb-8 text-center">Rates and Insurance</h2>
        <div className="flex flex-col items-center text-[#222] w-full">
          <p className="font-freight-sans-pro text-lg md:text-xl mb-6 text-center">Session Fee - $200</p>
          <p className="font-freight-sans-pro text-lg md:text-xl mb-6 text-center">Psychodiagnostic Evaluation - $225</p>
          <p className="font-freight-sans-pro text-base md:text-xl mb-6 text-center">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>
          <p className="font-freight-sans-pro text-base md:text-xl text-center w-full">
            For out-of-network plans, I've partnered with Mentaya using <a href="https://app.mentaya.com/p/U4Q2Q0Q0Q0" target="_blank" rel="noopener noreferrer" className="underline">this tool</a> to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

// FAQ Section Component
const faqData = [
  {
    question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
    answer: "CBT-I typically involves an assessment, sleep education, cognitive restructuring, stimulus control, sleep restriction, and relaxation techniques. Sessions are tailored to individual needs.",
  },
  {
    question: "Do you treat children or adolescents?",
    answer: "No, my practice is focused on adults (18+).",
  },
  {
    question: "Which geographic regions do you serve?",
    answer: "I serve clients in Michigan and most U.S. states via PSYPACT participation.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer: "Currently, all sessions are offered via telehealth.",
  },
  {
    question: "What technology do we use for virtual sessions?",
    answer: "Sessions are conducted via secure, HIPAA-compliant video platforms such as Zoom.",
  },
  {
    question: "What are your hours?",
    answer: "Hours vary by week. Please contact me for current availability.",
  },
  {
    question: "Do you take insurance?",
    answer: "Yes, I am in-network with BCBS and Aetna, and offer support for out-of-network reimbursement.",
  },
  {
    question: "What is the cost of therapy?",
    answer: "Session fees and evaluation fees are listed above in the Rates and Insurance section.",
  },
  {
    question: "What are the benefits of private pay therapy?",
    answer: "Private pay offers greater privacy, flexibility, and control over your treatment without insurance restrictions.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24 px-8 flex flex-col items-center justify-center">
      <h2 className="font-freight-display-pro text-[#4a6a7b] text-4xl md:text-5xl mb-12 text-center">Frequently Asked Questions</h2>
      <div className="w-full max-w-4xl">
        <h3 className="font-freight-display-pro text-[#4a6a7b] text-3xl mb-8">Therapy</h3>
        {faqData.map((item, idx) => (
          <div key={idx}>
            <button
              className="flex cursor-pointer items-center w-full py-4 text-left text-[#4a6a7b] font-freight-sans-pro text-xl border-0 border-b border-[#b5c6d3] focus:outline-none transition-colors group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="mr-4 flex items-center justify-center w-8 h-8 rounded-full border border-[#b5c6d3] text-[#4a6a7b] text-lg transition-transform group-aria-expanded:rotate-90">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 4.5L11.5 9L6.5 13.5" stroke="#4a6a7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="flex-1">{item.question}</span>
            </button>
            {openIndex === idx && (
              <div className="pl-12 mt-2 pr-4 pb-6 text-[#4a6a7b] text-lg font-freight-sans-pro animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
