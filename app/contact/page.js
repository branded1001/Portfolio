import ContactForm from "../../components/ContactForm";
import { metadata } from "../layout";

export default function ContactPage() {
  metadata.title = "Contact | Aditya Mourya";
  metadata.description = "Get in touch with Aditya Mourya for projects and opportunities.";
  metadata.icons = "/file.svg";
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black">
      <div className="max-w-3xl w-full">
        <br /> <br /> <br />
        <h1 className="text-4xl font-bold text-amber-300 text-center mb-4">
          Contact Me
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Have a project or opportunity? Let’s talk.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
