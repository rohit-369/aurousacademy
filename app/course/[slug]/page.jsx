import CourseDetailClient from './CourseDetailClient';
import { getJeeProgram } from '@/lib/jeePrograms';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const program = getJeeProgram(slug);
    return {
        title: `${program.titlePrefix} ${program.titleMain} ${program.titleSuffix} | Aurous Academy`,
        description: program.description,
        robots: 'index, follow',
    };
}

export default async function CourseDetailPage({ params }) {
    const { slug } = await params;
    return <CourseDetailClient slug={slug} />;
}
