import ContactPageClient from './ContactPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Contact Us | Aurous Academy Campuses, Bhopal',
  description: 'Contact Aurous Academy for admissions and student support. Find Campus 1, Campus 2, Campus 3 and Lalghati Campus in Bhopal.',
  keywords: 'contact Aurous Academy, admission enquiry, coaching campus Bhopal, Aurous Academy address, support',
  canonical: 'https://aurousacademy.com/contact',
});

export default function ContactPage() {
  return <ContactPageClient />;
}
