import React from "react";

import meta from "../content/_meta/contact_form.json";

const ContactForm = () => (
  <form action="https://formspree.io/f/xnqovvwv" method="POST">
    <div className="field">
      <div className="control">
        <textarea
          className="textarea"
          name="content"
          placeholder={meta.message}
          rows={7}
        />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input
          className="input"
          type="email"
          placeholder={meta.email}
          name="_replyto"
          required
        />
      </div>
    </div>

    <div className="control">
      <input className="button is-primary" type="submit" value={meta.submit} />
    </div>

    <input type="hidden" name="_next" value="email-sent" />
  </form>
);

export default ContactForm;
