"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full shrink-0">
        <h1 className="text-4xl md:text-5xl font-headline text-on-surface mb-8 text-center tracking-tight">
          Zaloguj się do panelu
        </h1>

        <form action={formAction} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-on-surface/80" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-transparent border border-on-surface/20 rounded-xl px-4 py-3 placeholder-on-surface/40 focus:outline-none focus:ring-1 focus:ring-on-surface/50 focus:border-on-surface/50 transition-colors"
              placeholder="adres@email.pl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-on-surface/80" htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="bg-transparent border border-on-surface/20 rounded-xl px-4 py-3 placeholder-on-surface/40 focus:outline-none focus:ring-1 focus:ring-on-surface/50 focus:border-on-surface/50 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {state?.error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm border border-red-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-4 bg-on-surface text-background px-6 py-4 rounded-full font-medium hover:bg-on-surface/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isPending ? "Logowanie..." : "Zaloguj się"}
            {!isPending && (
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
