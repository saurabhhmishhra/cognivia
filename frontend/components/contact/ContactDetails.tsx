"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Info</h2>
        <p className="text-muted-foreground">Feel free to email, call, or visit us at our clinic.</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail size={16} /> support@cognivia.com
          </li>
          <li className="flex items-center gap-2">
            <Phone size={16} /> +91 98765 43210
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={16} /> Gorakhpur, Uttar Pradesh, India
          </li>
        </ul>
      </div>

      <div className="rounded-md overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0496671189003!2d83.3625177!3d26.742791100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991450055654b93%3A0x61cf998f60ad81a5!2sThe%20Clinical%20Psychologist%20(Dr.%20Nitesh%20Mishra)%20Raiganj%20Road%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1750031688421!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
