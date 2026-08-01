import './globals.css';
import { Albert_Sans, Bricolage_Grotesque } from 'next/font/google';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  title: 'Focal Studio | Premium Web, Mobile & Custom Software Agency',
  description: 'Focal Studio is an elite software engineering and design agency. Custom Web Apps, Native Mobile (iOS/Android/React Native), UI/UX, MVP Sprints, and CTO Advisory.',
  keywords: 'Focal Studio, Custom Software Development, Web Apps, Next.js, React Native, Mobile App Development, UI UX Design, Startup MVP, Fractional CTO',
  openGraph: {
    title: 'Focal Studio — Your Vision, Built First',
    description: 'Elite web & mobile software development agency served by senior leads.',
    siteName: 'Focal Studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${albertSans.variable} ${bricolageGrotesque.variable}`}>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
