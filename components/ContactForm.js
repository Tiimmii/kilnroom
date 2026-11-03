"use client";

import { useState } from "react";
import { site, classes } from "@/data/site";

// No server yet: sending opens the visitor's email app with the note filled in.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Kilnroom: ${data.get("interest")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="interest">What are you after?</label>
        <select id="interest" name="interest" defaultValue={classes[0].name}>
          {classes.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="A piece from the shelf">A piece from the shelf</option>
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <div className="form__actions">
        <button type="submit" className="btn btn--primary">
          Send
        </button>
        {sent && (
          <p role="status" className="form__status">
            Your email app should open with the note ready to send.
          </p>
        )}
      </div>
    </form>
  );
}
