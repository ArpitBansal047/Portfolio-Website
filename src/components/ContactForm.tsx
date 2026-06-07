import { FormEvent, useState } from "react";
import { MdSend } from "react-icons/md";

type FormStatus = "idle" | "sending" | "success" | "error";

const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      if (!response.ok) throw new Error("Submit failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-form-wrap" aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading" className="contact-form-heading">
        Send a message
      </h3>
      <p className="contact-form-lead">
        Recruiters and collaborators — drop a note here. I&apos;ll get it in my
        Netlify inbox and by email once notifications are enabled.
      </p>

      {status === "success" ? (
        <p className="contact-form-feedback contact-form-feedback--success" role="status">
          Thanks — your message was sent. I&apos;ll reply soon.
        </p>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="contact-form-honeypot" hidden>
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="contact-form-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              disabled={status === "sending"}
            />
          </label>

          <label className="contact-form-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              disabled={status === "sending"}
            />
          </label>

          <label className="contact-form-field contact-form-field--full">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Role, project, or how you'd like to connect…"
              disabled={status === "sending"}
            />
          </label>

          {status === "error" && (
            <p className="contact-form-feedback contact-form-feedback--error" role="alert">
              Something went wrong. Please email me directly or try WhatsApp below.
            </p>
          )}

          <button
            type="submit"
            className="contact-form-submit"
            disabled={status === "sending"}
            data-cursor="disable"
          >
            {status === "sending" ? "Sending…" : "Send message"} <MdSend />
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
