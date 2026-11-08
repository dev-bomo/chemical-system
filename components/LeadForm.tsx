"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

type FormKind = "contact" | "quote";

type Props = {
  kind: FormKind;
  defaultProduct?: string;
};

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm({ kind, defaultProduct = "" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject:
              kind === "quote"
                ? `Cerere ofertă — ${siteConfig.name}`
                : `Mesaj contact — ${siteConfig.name}`,
            formType: kind,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        setMessage("Mesajul a fost trimis. Vă contactăm în curând.");
        form.reset();
      } catch {
        setStatus("error");
        setMessage(
          "Nu am putut trimite formularul. Încercați din nou sau scrieți-ne pe email.",
        );
      }
      return;
    }

    const subject =
      kind === "quote"
        ? encodeURIComponent(`Cerere ofertă — ${payload.nume || ""}`)
        : encodeURIComponent(`Contact — ${payload.nume || ""}`);
    const body = encodeURIComponent(
      [
        `Nume: ${payload.nume || ""}`,
        `Telefon: ${payload.telefon || ""}`,
        `Email: ${payload.email || ""}`,
        `Localitate: ${payload.localitate || ""}`,
        kind === "quote"
          ? `Produs / nevoie: ${payload.produs || ""}`
          : null,
        "",
        String(payload.mesaj || ""),
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );
    window.location.href = `${siteConfig.contact.emailHref}?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage("Se deschide clientul de email…");
  }

  const fieldClass =
    "mt-1 w-full border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-steel-600";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Nume *</span>
          <input
            required
            name="nume"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Telefon *</span>
          <input
            required
            name="telefon"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Email *</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Localitate *</span>
          <input
            required
            name="localitate"
            autoComplete="address-level2"
            className={fieldClass}
          />
        </label>
      </div>

      {kind === "quote" && (
        <label className="block text-sm">
          <span className="text-muted">Produs / aplicație</span>
          <input
            name="produs"
            defaultValue={defaultProduct}
            className={fieldClass}
            placeholder="Ex: diluant epoxidic, antigel non-toxic…"
          />
        </label>
      )}

      <label className="block text-sm">
        <span className="text-muted">Mesaj</span>
        <textarea
          name="mesaj"
          rows={5}
          className={fieldClass}
          placeholder={
            kind === "quote"
              ? "Descrieți cantitatea estimată, tipul de material și termenul dorit."
              : "Cum vă putem ajuta?"
          }
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Trimite"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-700" : "text-steel-700"
          }`}
          role="status"
        >
          {message}
        </p>
      )}

      {!endpoint && (
        <p className="text-xs text-muted">
          Formularul deschide email către {siteConfig.contact.email}. Configurați{" "}
          <code className="text-steel-700">NEXT_PUBLIC_FORM_ENDPOINT</code> pentru
          trimitere directă.
        </p>
      )}
    </form>
  );
}
