import OurFacultyPageClient from './OurFacultyPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Our Faculty Team | Aurous Academy',
  description: 'Explore the Aurous Academy faculty team for IIT-JEE, NEET and Foundation programmes in Bhopal.',
  keywords: 'Aurous Academy faculty, IIT JEE teachers, NEET faculty, Physics Chemistry Maths Biology teachers, Foundation faculty',
  canonical: 'https://aurousacademy.com/ourFaculty',
});

export default function OurFacultyPage() {
  return <OurFacultyPageClient />;
}
