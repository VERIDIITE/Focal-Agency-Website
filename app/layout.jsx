import './globals.css';

export const metadata = {
  title: 'Focal Studio | Premium Web, Mobile & Custom Software Agency',
  description: 'Focal Studio is an elite software engineering and design agency founded by Kasam. Custom Web Apps, Native Mobile (iOS/Android/React Native), UI/UX, MVP Sprints, and CTO Advisory.',
  keywords: 'Focal Studio, Kasam, Custom Software Development, Web Apps, Next.js, React Native, Mobile App Development, UI UX Design, Startup MVP, Fractional CTO, Bespoke Music Creation, Video Showreels',
  openGraph: {
    title: 'Focal Studio — Your Vision, Built First',
    description: 'Elite web & mobile software development agency led by Kasam.',
    siteName: 'Focal Studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-focal-dark text-slate-100 antialiased selection:bg-focal-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}
