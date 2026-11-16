import FoundationCourseDetailClient from './FoundationCourseDetailClient';
import { getFoundationProgram } from '@/lib/foundationPrograms';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const program = getFoundationProgram(slug);
    return {
        title: `${program.titlePrefix} ${program.titleMain} ${program.titleSuffix} | Aurous Academy`,
        description: program.description,
        robots: 'index, follow',
    };
}

export default async function FoundationCourseDetailPage({ params }) {
    const { slug } = await params;
    return <FoundationCourseDetailClient slug={slug} />;
}
