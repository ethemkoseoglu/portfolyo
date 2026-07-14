"use client";

import { useState, type FormEvent } from "react";
import { CornerDownLeft, Check } from "lucide-react";
import { site } from "@/config/site";
import { useLang } from "@/i18n/LanguageProvider";
import type { Dict } from "@/i18n/content";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues, f: Dict["ui"]["form"]): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = f.errName;
  if (!values.email.trim()) {
    errors.email = f.errEmailEmpty;
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = f.errEmailInvalid;
  }
  if (!values.subject.trim()) errors.subject = f.errSubject;
  if (!values.message.trim()) {
    errors.message = f.errMessageEmpty;
  } else if (values.message.trim().length < 10) {
    errors.message = f.errMessageShort;
  }
  return errors;
}

const fieldBase =
  "w-full border-0 border-b border-line bg-transparent py-3 font-body text-foreground placeholder:text-muted/50 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-0";
const labelBase = "block text-[0.65rem] uppercase tracking-[0.2em] text-muted";
const errorBase = "mt-2 text-xs text-accent";

export function ContactForm() {
  const { t } = useLang();
  const f = t.ui.form;
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, f);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Opens the visitor's mail client with the message pre-filled, addressed
    // to the site owner. Zero backend, works everywhere. Swap for Formspree /
    // Resend / an API route later for a seamless in-page submit.
    const subject = `${values.subject} — ${values.name}`;
    const body = `${values.message}\n\n—\n${values.name}\n${values.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setValues(EMPTY);
  }

  if (submitted) {
    return (
      <div
        role="alert"
        className="flex flex-col items-start gap-4 border border-line p-8"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent">
          <Check className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <p className="font-heading text-xl font-bold text-foreground">
          {f.sentTitle}
        </p>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {f.sentBefore}{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          {f.sentAfter}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {f.newMessage}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            {f.fullName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldBase}
          />
          {errors.name ? (
            <p id="name-error" className={errorBase} role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldBase}
          />
          {errors.email ? (
            <p id="email-error" className={errorBase} role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelBase}>
          {f.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldBase}
        />
        {errors.subject ? (
          <p id="subject-error" className={errorBase} role="alert">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldBase} resize-none`}
        />
        {errors.message ? (
          <p id="message-error" className={errorBase} role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          className="group inline-flex min-h-[44px] items-center gap-3 rounded-full bg-foreground px-7 py-3 text-xs font-medium uppercase tracking-[0.16em] text-background ring-1 ring-transparent transition-all duration-300 hover:bg-transparent hover:text-foreground hover:ring-accent"
        >
          <CornerDownLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
          {f.send}
        </button>
      </div>
    </form>
  );
}
