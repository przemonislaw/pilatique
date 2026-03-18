"use client";

import { FormEvent, useState } from "react";
import { sendContactMessage } from "@/lib/db/public";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Uzupełnij wszystkie pola formularza.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      await sendContactMessage({ name, email, message });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-sans tracking-wide text-charcoal-900 uppercase">
          Imię i nazwisko
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={120}
          className="w-full rounded-none border-b border-charcoal-900/30 bg-transparent px-2 py-3 text-charcoal-900 outline-none focus:border-charcoal-900 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-sans tracking-wide text-charcoal-900 uppercase">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          className="w-full rounded-none border-b border-charcoal-900/30 bg-transparent px-2 py-3 text-charcoal-900 outline-none focus:border-charcoal-900 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-sans tracking-wide text-charcoal-900 uppercase">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className="w-full rounded-none border-b border-charcoal-900/30 bg-transparent px-2 py-3 text-charcoal-900 outline-none focus:border-charcoal-900 transition-colors resize-y"
        />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center border-b border-charcoal-900 pb-1 font-sans text-sm tracking-[0.15em] uppercase text-charcoal-900 transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
      </div>

      {status === "success" ? (
        <p className="text-sm tracking-wide text-[#111111] bg-emerald-100/50 border border-emerald-200 p-4 rounded-sm">Dziękujemy! Wiadomość została wysłana.</p>
      ) : null}

      {status === "error" && error ? <p className="text-sm tracking-wide text-[#111111] bg-rose-100/50 border border-rose-200 p-4 rounded-sm">{error}</p> : null}
    </form>
  );
}
