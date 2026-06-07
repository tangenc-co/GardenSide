"use client";

import Image from "next/image";
import { useState } from "react";
const formFields = [
  {
    id: "name",
    label: "Full Name ",
    type: "text",
    placeholder: "Your  name",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your@emial.com",
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
  {
    id: 1,
    description: "General Enquiry",
  },
  {
    id: 2,
    description: "Product Question",
  },
  {
    id: 3,
    description: "Request a Quote",
  },
  {
    id: 4,
    description: "Teak Care Service",
  },
];
export function ContactInfo() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-[#FAFAF8] py-20">
      <div className="mx-auto max-w-7xl w-full p-4 ">
        <div className="grid grid-cols-4 gap-10 mb-40">
          {metaData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FEFEFE] border border-[#72BF96] rounded-lg p-4 text-center space-y-2"
              >
                <div className="mx-auto rounded-full bg-[#EDFAF5] px-4 w-14 h-14 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={22} height={22} />
                </div>
                <p className="text-[#143D30] text-[16px] font-semibold">
                  {item.title}
                </p>
                <p className="text-[#7A7A7A] text-sm">{item.desc1}</p>
                <p className="text-[#7A7A7A] text-sm">{item.desc2}</p>
                <span className="text-[#056839] text-sm font-semibold">
                  {item.route}
                </span>
              </div>
            );
          })}
        </div>
        <span className="uppercase text-[#056839] text-lg font-medium">
          — Collections
        </span>
        <div className="mx-auto max-w-7xl mt-5 space-x-10 flex">
          <div className="w-[60%] space-y-6">
            <p className="text-[#213526] font-semibold text-4xl">
              How Can We Help?
            </p>
            <div>
              <p className="text-[#143D30] font-semibold text-sm uppercase">
                Enquiry Type
              </p>
              <div className="space-x-4 text-sm flex mt-2">
                {tabs.map((data) => {
                  return (
                    <div key={data.id}>
                      <button
                        onClick={() => {
                          setActiveTab(data.id);
                        }}
                        className={`rounded-full px-4 py-2  ${activeTab === data.id ? "bg-[#1E3D2F] text-white border border-[#1E3D2F]" : "bg-[#F8F5EF] text-[#143D30] border border-[#97CCB3]"}`}
                      >
                        {data.description}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block text-sm font-medium text-[#143D30] uppercase "
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
                      className="w-full rounded-sm  border-[1.5px] border-[#97CCB3] px-4 py-3 outline-none focus:border-[#056839] placeholder-[#7A7A7A] text-[#143D30]"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#143D30] uppercase"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your enquiry, your garden space, or any specific requirements..."
                  className="w-full rounded-lg border-[1.5px] border-[#97CCB3] px-4 py-3 outline-none focus:border-[#056839] placeholder-[#7A7A7A] text-[#143D30]"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-[#1E3D2F] px-6 py-3 font-medium text-white"
              >
                Send Message
              </button>

              <button className="rounded-lg bg-[#EDFAF5] px-8 py-4 font-semibold text-[#213526] transition hover:bg-[#D1E8D9] ml-4">
                Get a Quote →
              </button>
            </form>
          </div>
          <div className="w-[40%]">
            <div className="overflow-hidden rounded-xl">
              <iframe
                width={512}
                height={320}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61094.580171403344!2d96.13251018277388!3d16.855538444976467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193e65756baa7%3A0x36355f4d4e33e222!2sSweety%20Home%20Living%20Mall%20-%20Kyaik%20Ka%20San!5e0!3m2!1sen!2smm!4v1780732671531!5m2!1sen!2smm"
                loading="lazy"
              />
            </div>
            <div className="mt-4 rounded-lg border border-[#97CCB3] bg-[#EDFAF5] p-5 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#056839]">
                  — Teak Care Service
                </p>

                <h3 className="text-lg font-semibold text-[#1E3D2F]">
                  Book a Teak Restoration
                </h3>

                <p className="text-sm leading-relaxed text-[#7A7A7A]">
                  Our professional teak oiling and restoration service will
                  bring your furniture back to its original lustre. Book a visit
                  from our expert team.
                </p>
              </div>

              <button
                type="button"
                className="rounded-lg bg-[#1E3D2F] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get a Teak Care Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
