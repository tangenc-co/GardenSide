"use client";

import Image from "next/image";
import { useState } from "react";

const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+44 7700 000000",
    required: false,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's it about?",
    required: false,
  },
];

const metaData = [
  {
    id: 1,
    icon: "/icon/green-map.svg",
    title: "Visit Our Showroom",
    desc1: "12 Garden Lane, Chelsea",
    desc2: "London SW3 4BH",
    route: "Get Directions →",
  },
  {
    id: 2,
    icon: "/icon/green-phone.svg",
    title: "Call Us",
    desc1: "+44 (0)20 1234 5678",
    desc2: "Mon–Sat: 9am – 6pm",
    route: "Call Now →",
  },
  {
    id: 3,
    icon: "/icon/green-envelope.svg",
    title: "Email Us",
    desc1: "hello@gardenside.com",
    desc2: "We reply within 24 hours",
    route: "Send Email →",
  },
  {
    id: 4,
    icon: "/icon/green-clock.svg",
    title: "Opening Hours",
    desc1: "Mon–Fri: 9:00 – 18:00",
    desc2: "Sat: 10:00 – 17:00",
    route: "",
  },
];

const tabs = [
  { id: 1, description: "General Enquiry" },
  { id: 2, description: "Product Question" },
  { id: 3, description: "Request a Quote" },
  { id: 4, description: "Teak Care Service" },
];

export function ContactInfo() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="bg-[#FAFAF8] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-28">
          {metaData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FEFEFE] border border-[#72BF96]/50 rounded-xl p-5 text-center flex flex-col items-center justify-between space-y-3 shadow-xs hover:border-[#056839] transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2 w-full">
                  <div className="rounded-full bg-[#EDFAF5] w-12 h-12 flex items-center justify-center shrink-0">
                    <Image src={item.icon} alt="" width={22} height={22} className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-[#143D30] text-base font-semibold tracking-tight pt-1">
                    {item.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm leading-none">{item.desc1}</p>
                  <p className="text-[#7A7A7A] text-sm leading-none">{item.desc2}</p>
                </div>
                {item.route && (
                  <span className="text-[#056839] text-sm font-semibold tracking-wide hover:underline cursor-pointer block pt-1">
                    {item.route}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <span className="uppercase text-[#056839] text-sm font-semibold tracking-wider block">
          — Collections
        </span>


        <div className="mt-4 flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">
          

          <div className="w-full lg:w-[60%] space-y-6 sm:space-y-8">
            <h2 className="text-[#213526] font-bold text-3xl sm:text-4xl tracking-tight">
              How Can We Help?
            </h2>
            
    
            <div className="space-y-2">
              <span className="text-[#143D30] font-bold text-xs uppercase tracking-wider block">
                Enquiry Type
              </span>
              <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x">
                {tabs.map((data) => {
                  return (
                    <div key={data.id} className="snap-contained shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveTab(data.id)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 outline-none whitespace-nowrap
                          ${activeTab === data.id 
                            ? "bg-[#1E3D2F] text-white border border-[#1E3D2F] shadow-xs" 
                            : "bg-[#F8F5EF] text-[#143D30] border border-[#97CCB3]/60 hover:bg-[#E5E7EB]/30"
                          }`}
                      >
                        {data.description}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold text-[#143D30] uppercase tracking-wider"
                    >
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-red-500">*</span>
                      )}
                    </label>

                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full rounded-md border-[1.5px] border-[#97CCB3]/70 px-4 py-3 text-sm outline-none focus:border-[#056839] bg-white transition-colors placeholder-[#7A7A7A] text-[#143D30]"
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#143D30] uppercase tracking-wider"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your enquiry, your garden space, or any specific requirements..."
                  className="w-full rounded-md border-[1.5px] border-[#97CCB3]/70 px-4 py-3 text-sm outline-none focus:border-[#056839] bg-white transition-colors placeholder-[#7A7A7A] text-[#143D30] resize-y"
                  required
                />
              </div>

      
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg bg-[#1E3D2F] px-6 py-3.5 text-sm font-semibold text-white tracking-wide shadow-sm hover:bg-[#152a20] transition-colors text-center"
                >
                  Send Message
                </button>

                <button 
                  type="button"
                  className="w-full sm:w-auto rounded-lg bg-[#EDFAF5] px-6 py-3.5 text-sm font-semibold text-[#213526] border border-[#97CCB3]/30 hover:bg-[#D1E8D9] transition-colors text-center"
                >
                  Get a Quote →
                </button>
              </div>
            </form>
          </div>

   
          <div className="w-full lg:w-[40%] space-y-6 sticky top-24">
            <div className="overflow-hidden rounded-xl border border-[#E5E7EB] relative w-full aspect-video sm:aspect-16/10 lg:aspect-512/320 bg-zinc-100 shadow-xs">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61094.580171403344!2d96.13251018277388!3d16.855538444976467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193e65756baa7%3A0x36355f4d4e33e222!2sSweety%20Home%20Living%20Mall%20-%20Kyaik%20Ka%20San!5e0!3m2!1sen!2smm!4v1780732671531!5m2!1sen!2smm"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                title="GardenSide Showroom Location Map"
                allowFullScreen
              />
            </div>
            
            <div className="rounded-xl border border-[#97CCB3]/60 bg-[#EDFAF5] p-5 sm:p-6 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#056839] block">
                  — Teak Care Service
                </span>

                <h3 className="text-lg font-semibold text-[#1E3D2F] tracking-tight">
                  Book a Teak Restoration
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[#7A7A7A]">
                  Our professional teak oiling and restoration service will
                  bring your furniture back to its original lustre. Book a visit
                  from our expert team.
                </p>
              </div>

              <button
                type="button"
                className="w-full sm:w-auto rounded-lg bg-[#1E3D2F] px-5 py-3 text-xs sm:text-sm font-semibold text-white tracking-wide transition-colors hover:bg-[#152a20] shadow-xs"
              >
                Get a Teak Care Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}