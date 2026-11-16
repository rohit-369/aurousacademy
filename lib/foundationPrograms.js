// Shared data for the Foundation course detail pages.
// Matched to the Aurous Academy Foundation developer package (foundation-*-*.html).

export const foundationSubjects = [
    { number: '01', title: 'Physics' },
    { number: '02', title: 'Chemistry' },
    { number: '03', title: 'Mathematics' },
    { number: '04', title: 'Biology' },
    { number: '05', title: 'Social Science' },
    { number: '06', title: 'Mental Ability' },
];

const classroomIntro =
    'Evening classes let students continue with school and work on concepts with guided support. The focus is on understanding why an answer works, not just remembering it. The program supports school learning and builds a base for Olympiads and later JEE/NEET preparation.';

const integratedIntro =
    'Learning is integrated into the school day, bringing academic study and Foundation preparation into one routine. The program supports school learning and builds a base for Olympiads and later JEE/NEET preparation.';

const testsIntro = 'Review your understanding with regular tests and practice papers.';
const testsIntroSubjective = 'Review your understanding with regular tests and practice papers. Includes subjective papers based on the school pattern.';

export const foundationPrograms = [
    {
        slug: 'class7-classroom',
        eyebrow: 'FOUNDATION',
        titlePrefix: '2-Year',
        titleMain: 'Classroom',
        titleSuffix: 'Program',
        classLabel: 'Class 7',
        target: '2028',
        stage: '7',
        tagline: 'School in the morning. Foundation in the evening.',
        description:
            'A 2-year program starting in Class 7, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 7 Classroom Foundation 2028',
        facts: [
            { value: '2 Years', label: 'Program duration' },
            { value: 'Evening', label: 'Class timing' },
            { value: 'Class 7', label: 'Entry class' },
            { value: '2028', label: 'Target year' },
            { value: 'Science & Maths', label: 'Core learning' },
            { value: 'APSS', label: 'Guided practice' },
            { value: 'Revision', label: 'Chapter review' },
        ],
        learningTitle: ["How you'll learn", 'in Class 7'],
        learningIntro: classroomIntro,
        learningSteps: [
            { title: 'Learn', desc: 'Explore new ideas in science and mathematics through conceptual classes.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: 'Return to earlier chapters and work through questions that need more practice.' },
        ],
        testsIntro,
        tests: [
            { count: 'Chapter practice', title: 'Practice papers', pattern: 'Chapter review' },
            { count: 'Revision', title: 'Assessment plan', pattern: 'Ask about the two-year schedule' },
        ],
        ctaTitle: 'Register Now for Class 7 – Target 2028',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
    {
        slug: 'class8-classroom',
        eyebrow: 'FOUNDATION',
        titlePrefix: '1-Year',
        titleMain: 'Classroom',
        titleSuffix: 'Program',
        classLabel: 'Class 8',
        target: '2027',
        stage: '8',
        tagline: 'School in the morning. Foundation in the evening.',
        description:
            'A 1-year program starting in Class 8, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 8 Classroom Foundation 2027',
        facts: [
            { value: '1 Year', label: 'Program duration' },
            { value: 'Evening', label: 'Class timing' },
            { value: '3 hours', label: '3 days a week' },
            { value: '300+', label: 'Teaching hours' },
            { value: '50+', label: 'Revision hours' },
            { value: '8', label: 'Minor tests' },
            { value: '03', label: 'Major tests' },
        ],
        learningTitle: ["How you'll learn", 'in Class 8'],
        learningIntro: classroomIntro,
        learningSteps: [
            { title: 'Learn', desc: '300+ hours of conceptual classes for the 1-year program starting in Class 8.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: '50+ hours of revision classes to revisit and strengthen concepts.' },
        ],
        testsIntro,
        tests: [
            { count: '8', title: 'Minor tests', pattern: 'Chapter review' },
            { count: '03', title: 'Major tests', pattern: 'Broader revision' },
        ],
        ctaTitle: 'Register Now for Class 8 – Target 2027',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
    {
        slug: 'class9-classroom',
        eyebrow: 'FOUNDATION',
        titlePrefix: '2-Year',
        titleMain: 'Classroom',
        titleSuffix: 'Program',
        classLabel: 'Class 9',
        target: '2028',
        stage: '9',
        tagline: 'School in the morning. Foundation in the evening.',
        description:
            'A 2-year program starting in Class 9, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 9 Classroom Foundation 2028',
        facts: [
            { value: '2 Years', label: 'Program duration' },
            { value: 'Evening', label: 'Class timing' },
            { value: '3 hours', label: '4 days a week' },
            { value: '750+', label: 'Teaching hours' },
            { value: '100+', label: 'Revision hours' },
            { value: '15', label: 'Minor tests' },
            { value: '06', label: 'Major tests' },
        ],
        learningTitle: ["How you'll learn", 'in Class 9'],
        learningIntro: classroomIntro,
        learningSteps: [
            { title: 'Learn', desc: '750+ hours of conceptual classes for the 2-year program starting in Class 9.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: '100+ hours of revision classes to revisit and strengthen concepts.' },
        ],
        testsIntro,
        tests: [
            { count: '15', title: 'Minor tests', pattern: 'Chapter review' },
            { count: '06', title: 'Major tests', pattern: 'Broader revision' },
        ],
        ctaTitle: 'Register Now for Class 9 – Target 2028',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
    {
        slug: 'class9-school-integrated',
        eyebrow: 'FOUNDATION',
        titlePrefix: '2-Year',
        titleMain: 'School Integrated',
        titleSuffix: 'Program',
        classLabel: 'Class 9',
        target: '2028',
        stage: '9',
        tagline: 'School and Foundation in one timetable.',
        description:
            'A 2-year program starting in Class 9, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 9 School Integrated Foundation 2028',
        facts: [
            { value: '2 Years', label: 'Program duration' },
            { value: 'Within-School', label: 'Class timing' },
            { value: '6 hours', label: '6 days a week' },
            { value: '950+', label: 'Teaching hours' },
            { value: '100+', label: 'Revision hours' },
            { value: '15', label: 'Minor tests' },
            { value: '06', label: 'Major tests' },
        ],
        learningTitle: ["How you'll learn", 'in Class 9'],
        learningIntro: integratedIntro,
        learningSteps: [
            { title: 'Learn', desc: '950+ hours of conceptual classes for the 2-year program starting in Class 9.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: '100+ hours of revision classes to revisit and strengthen concepts.' },
        ],
        testsIntro: testsIntroSubjective,
        tests: [
            { count: '15', title: 'Minor tests', pattern: 'Chapter review' },
            { count: '06', title: 'Major tests', pattern: 'Broader revision' },
        ],
        ctaTitle: 'Register Now for Class 9 – Target 2028',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
    {
        slug: 'class10-classroom',
        eyebrow: 'FOUNDATION',
        titlePrefix: '1-Year',
        titleMain: 'Classroom',
        titleSuffix: 'Program',
        classLabel: 'Class 10',
        target: '2027',
        stage: '10',
        tagline: 'School in the morning. Foundation in the evening.',
        description:
            'A 1-year program starting in Class 10, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 10 Classroom Foundation 2027',
        facts: [
            { value: '1 Year', label: 'Program duration' },
            { value: 'Evening', label: 'Class timing' },
            { value: '3 hours', label: '4 days a week' },
            { value: '400+', label: 'Teaching hours' },
            { value: '50+', label: 'Revision hours' },
            { value: '6', label: 'Minor tests' },
            { value: '03', label: 'Major tests' },
        ],
        learningTitle: ["How you'll learn", 'in Class 10'],
        learningIntro: classroomIntro,
        learningSteps: [
            { title: 'Learn', desc: '400+ hours of conceptual classes for the 1-year program starting in Class 10.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: '50+ hours of revision classes to revisit and strengthen concepts.' },
        ],
        testsIntro: testsIntroSubjective,
        tests: [
            { count: '6', title: 'Minor tests', pattern: 'Chapter review' },
            { count: '03', title: 'Major tests', pattern: 'Broader revision' },
        ],
        ctaTitle: 'Register Now for Class 10 – Target 2027',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
    {
        slug: 'class10-school-integrated',
        eyebrow: 'FOUNDATION',
        titlePrefix: '1-Year',
        titleMain: 'School Integrated',
        titleSuffix: 'Program',
        classLabel: 'Class 10',
        target: '2027',
        stage: '10',
        tagline: 'School and Foundation in one timetable.',
        description:
            'A 1-year program starting in Class 10, with conceptual teaching, regular practice and time to ask questions. Science and Mathematics form the base, alongside Social Science and Mental Ability.',
        programName: 'Class 10 School Integrated Foundation 2027',
        facts: [
            { value: '1 Year', label: 'Program duration' },
            { value: 'Within-School', label: 'Class timing' },
            { value: '6 hours', label: '6 days a week' },
            { value: '500+', label: 'Teaching hours' },
            { value: '80+', label: 'Revision hours' },
            { value: '6', label: 'Minor tests' },
            { value: '03', label: 'Major tests' },
        ],
        learningTitle: ["How you'll learn", 'in Class 10'],
        learningIntro: integratedIntro,
        learningSteps: [
            { title: 'Learn', desc: '500+ hours of conceptual classes for the 1-year program starting in Class 10.' },
            { title: 'Practise', desc: 'Chapter-wise Assisted Problem Solving Sessions (APSS).' },
            { title: 'Clear doubts', desc: 'Additional classroom slots dedicated to doubt-clearing classes.' },
            { title: 'Revise', desc: '80+ hours of revision classes to revisit and strengthen concepts.' },
        ],
        testsIntro: testsIntroSubjective,
        tests: [
            { count: '6', title: 'Minor tests', pattern: 'Chapter review' },
            { count: '03', title: 'Major tests', pattern: 'Broader revision' },
        ],
        ctaTitle: 'Register Now for Class 10 – Target 2027',
        ctaDesc: 'Ask about batch timings, fees and the next steps for admission.',
    },
];

export function getFoundationProgram(slug) {
    return foundationPrograms.find((program) => program.slug === slug) || foundationPrograms[0];
}
