"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { id: 1, icon: "/icon/instagram.svg", alt: "Instagram", href: "/" },
  { id: 2, icon: "/icon/facebook.svg", alt: "Facebook", href: "/" },
  { id: 3, icon: "/icon/twitter.svg", alt: "Twitter", href: "/" },
  { id: 4, icon: "/icon/linkedin.svg", alt: "LinkedIn", href: "/" },
];

const footerSections = [
  {
    id: 1,
    title: "EXPLORE",
    links: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/" },
      { name: "Teak Care Guide", href: "/" },
      { name: "About Us", href: "/" },
      { name: "Contact Us", href: "/" },
    ],
  },
  {
    id: 2,
    title: "COLLECTIONS",
    links: [
      { name: "Dining Sets", href: "/" },
      { name: "Lounge & Daybed", href: "/" },
      { name: "Garden Benches", href: "/" },
      { name: "Outdoor Sofas", href: "/" },
      { name: "Parasols & Shade", href: "/" },
      { name: "Planters & Decor", href: "/" },
    ],
  },
];

export function SiteFooter() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Email", data);

if (!response.ok || data.success === false || data.data?.error) {
  
  const resendError = data.data?.error?.message || data.message || "Subscription failed.";
  
  setStatus({
    type: "error",
    text: resendError,
  });
} else {
  setStatus({
    type: "success",
    text: "Thank you for subscribing!",
  });
}
    } catch (error) {
      setStatus({ type: "error", text: "Connection failed." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="mt-auto border-t border-[#E5E7EB] bg-[#213526] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <p className="text-sm leading-7 text-gray-300 w-70 mt-12">
              Crafting premium outdoor furniture from sustainably sourced teak
              and natural materials. Bringing beauty and quality to gardens
              across the UK since 1998.
            </p>

            <ul className="mt-5 flex items-center gap-4">
              {socialIcons.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.href}
                    aria-label={social.alt}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition  hover:text-[#213526]"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-30">
            {footerSections.map((section) => (
              <div key={section.id}>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
              STAY CONNECTED
            </h3>

            <p className="text-sm leading-6 text-gray-300">
              Subscribe for new arrivals, teak care tips, and exclusive offers.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-600 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-white text-white"
                />

                <button
                  className={`rounded-md bg-white px-5 py-3 text-sm font-medium text-[#213526] transition hover:bg-gray-200 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "JOINING..." : "SUBSCRIBE"}
                </button>
              </div>
            </form>
            {status.text && (
              <p
                className={`text-xs font-semibold ${status.type === "success" ? "text-green-700" : "text-red-600"}`}
              >
                {status.text}
              </p>
            )}

            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Image
                  src="/icon/map.svg"
                  alt="Location"
                  width={24}
                  height={24}
                />{" "}
                12 Garden Lane, Chelsea, London SW3 4BH
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/icon/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />{" "}
                +44 (0)20 1234 5678
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/icon/envelop.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />{" "}
                hello@gardenside.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 Gardenside. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
