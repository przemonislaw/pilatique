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
    <form onSubmit={onSubmit} className="mt-8 max-w-2xl space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-neutral-300">
          Imię i nazwisko
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={120}
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:border-[#a56b2b]"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-neutral-300">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:border-[#a56b2b]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-neutral-300">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-100 outline-none focus:border-[#a56b2b]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-md bg-[#a56b2b] px-6 py-3 font-serif text-neutral-950 hover:bg-[#b3732f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-400">Dziękujemy! Wiadomość została wysłana.</p>
      ) : null}

      {status === "error" && error ? <p className="text-sm text-rose-400">{error}</p> : null}
    </form>
  );
}
