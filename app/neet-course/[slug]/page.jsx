import NEETCourseDetailClient from './NEETCourseDetailClient';
import { getNeetProgram } from '@/lib/neetPrograms';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const program = getNeetProgram(slug);
    return {
        title: `${program.titlePrefix} ${program.titleMain} ${program.titleSuffix} | Aurous Academy`,
        description: program.description,
        robots: 'index, follow',
    };
}

export default async function NEETCourseDetailPage({ params }) {
    const { slug } = await params;
    return <NEETCourseDetailClient slug={slug} />;
}
