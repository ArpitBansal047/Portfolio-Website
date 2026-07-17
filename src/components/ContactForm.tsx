import { FormEvent, useState } from "react";
import { MdSend } from "react-icons/md";

type FormStatus = "idle" | "sending" | "success" | "error";

const toUrlEncodedBody = (form: HTMLFormElement) => {
  const params = new URLSearchParams();
  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    params.append(key, typeof value === "string" ? value : value.name);
  }

  if (!params.has("form-name")) {
    params.set("form-name", "contact");
  }

  return params.toString();
};

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: toUrlEncodedBody(form),
      });

      if (response.status === 404) {
        throw new Error("Form not registered on Netlify");
      }

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
        Recruiters and collaborators — drop a note here and I&apos;ll get back to you.
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
              Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
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
              rows={3}
              placeholder="Role, project, or how you'd like to connect…"
              disabled={status === "sending"}
            />
          </label>

          {status === "error" && (
            <p className="contact-form-feedback contact-form-feedback--error" role="alert">
              Something went wrong. Please email me directly or try WhatsApp above.
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
