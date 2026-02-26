export const siteConfig = {
  businessName: "JRM Autos",
  tagline: "Premium vehicle care in the heart of Coventry.",
  phone: "024 7600 0000",
  whatsapp: "07700 900000",
  emailTo: "info@jrmautos.example.com",
  address: "Unit 1, Example Industrial Estate, Coventry, CV1 1AA",
  openingTimes: [
    { day: "Monday", hours: "08:30 - 17:30" },
    { day: "Tuesday", hours: "08:30 - 17:30" },
    { day: "Wednesday", hours: "08:30 - 17:30" },
    { day: "Thursday", hours: "08:30 - 17:30" },
    { day: "Friday", hours: "08:30 - 17:30" },
    { day: "Saturday", hours: "09:00 - 13:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  googleProfileUrl: "https://google.com/search?q=jrm+autos+coventry",
  googleMapsUrl: "https://maps.google.com/?q=JRM+Autos+Coventry",
};

export type SiteConfig = typeof siteConfig;
