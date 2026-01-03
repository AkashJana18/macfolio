import WindowWrapper from "#hoc/WindowWrapper";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { contactLinks } from "#constants";
import WindowControls from "#components/WindowControls";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "akashjana663@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback (older browsers)
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>

      <div className="p-5 flex justify-evenly items-center w-full">
        <img src="/images/dp.jpg" alt="Akash" className="w-40 rounded-3xl" />
        <div className="w-full p-5 flex flex-col">
          {/* Micro bio line */}
          <h2 className="text-lg text-gray-600 text-cover">
            Frontend & Web3 dev · Writer · Always learning
          </h2>

          {/* Status + preferred hint */}
          <p className="text-gray-600">
            Available for collaborations, freelance gig & chess match!
          </p>

          {/* Copy email button */}
          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              onClick={handleCopy}
              className="group inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm
                     hover:shadow-md hover:bg-gray-50 active:scale-[0.98] transition"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-green-600" />
                  <span className="text-green-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-gray-600 group-hover:text-gray-800 transition" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl">
        {contactLinks.map(({ id, name, href, icon: Icon, color }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
          >
            <Icon
              className={`size-16 ${color} group-hover:scale-110 transition transition-all duration-100 hover:scale-110 hover:-translate-y-1 m-1`}
            />
          </a>
        ))}
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
