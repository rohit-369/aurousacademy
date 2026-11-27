import React from 'react';
import styles from './OurMethodologies.module.css';

const methodologySections = [
  {
    id: 'concept-building',
    number: '01',
    title: 'Concept Building',
    cards: [
      {
        icon: '/method-icons/lecture.svg',
        title: 'Main Lecture Classes',
        description: 'Best qualified faculties deliver regular lectures as per schedule and course provided by the JEE committee. All the topics covered under classroom teaching are appropriate as per the latest JEE syllabus and pattern.',
      },
      {
        icon: '/method-icons/discussion.svg',
        title: 'Sheet Discussion Classes',
        description: 'Problem Sheets are discussed regularly in sheet discussion classes which also include discussion on question banks and special assignments. These classes help students in clarifying doubts and help them in understanding the concepts.',
      },
      {
        icon: '/method-icons/revision.svg',
        title: 'Revision Classes',
        description: 'Special classes are conducted for revision so that students can complete the course if they left some of the topics during classroom lectures.',
      },
      {
        icon: '/method-icons/board.svg',
        title: 'Board Preparation Classes',
        description: 'AUROUS also organizes special board preparation classes in addition to JEE to enable students to get better marks in board.',
      },
    ],
  },
  {
    id: 'learning-redefined',
    number: '02',
    title: 'Learning Redefined',
    cards: [
      {
        icon: '/method-icons/faculty.svg',
        title: 'Best Faculty',
        description: "A team of professionals who know the content and process of engineering entrance exams inside out. The faculties here are the best combination of a 'Guru' and a friend, providing a helping hand to the students whenever they need their support.",
      },
      {
        icon: '/method-icons/video.svg',
        title: 'Video Library',
        description: 'At Aurous, facility of video library is available where all the lectures are provided in the recorded form.',
      },
      {
        icon: '/method-icons/panel.svg',
        title: 'Digital Panel',
        description: 'We have well-organized digital panel which makes learning easy and interesting. A 3D view of all the diagrams and structures makes the respective topic more clear. Class becomes more interesting and attentive in visualized manner.',
      },
      {
        icon: '/method-icons/concept.svg',
        title: 'Pattern Proof Teaching',
        description: "Our main aim is to identify the analytical ability of the students and to guide them as per their ability. We aim to build our students' concept much stronger so that, irrespective of the fact that every year IITJEE keeps changing their pattern, our students excel at each level.",
      },
      {
        icon: '/method-icons/batch.svg',
        title: 'Batch Size',
        description: 'We believe in the fact that it is the quality that matters, not the numbers. Instead of having hundreds of students in a batch we prefer 40 to 50 students per batch who gets the entire guidance and we develop a lasting relationship with every student.',
      },
      {
        icon: '/method-icons/personal.svg',
        title: 'Personalised Coaching',
        description: 'Faculties at Aurous Academy tend to ensure that the students are in the right hands and are free to discuss all their doubts without any hesitation. Each and every student at Aurous Academy is given individual guidance and attention.',
      },
    ],
  },
  {
    id: 'study-material',
    number: '03',
    title: 'Study Material',
    cards: [
      {
        icon: '/method-icons/daily.svg',
        title: 'Daily Practice Problems (DPP)',
        description: 'Regular progress is important and to ensure the progress, students must check their level of knowledge by solving practice sheets. With the help of problem sheets, they get to know about the multi-conceptual questions and solve them easily.',
      },
      {
        icon: '/method-icons/exercise.svg',
        title: 'Chapter-wise EXERCISE Sheets',
        description: 'Exercise Sheets are developed Chapter-wise and created by taking care of the syllabus of the JEE. Questions involved in the booklet are of various kinds that vary in conceptual, tricky, multi-chapter and brainstorming.',
      },
      {
        icon: '/method-icons/notes.svg',
        title: 'Theory Notes & Key Concepts',
        description: 'With each sheet, there is a brief description of the key concepts. This helps students to go through an approach for a while before start of solving questions.',
      },
      {
        icon: '/method-icons/bank.svg',
        title: 'Question Banks',
        description: 'It contains best practice questions based on JEE Pattern and is distributed among easy to difficult levels.',
      },
    ],
  },
  {
    id: 'test-series',
    number: '04',
    title: 'Test Series',
    cards: [
      {
        icon: '/method-icons/main.svg',
        title: 'JEE Main Review Test Series',
        description: 'In a time duration of every 2-3 weeks, AUROUS conducts a test of 3 hours based on JEE Main Exam Pattern.',
      },
      {
        icon: '/method-icons/advanced.svg',
        title: 'JEE Advanced Review Test Series',
        description: 'In a time duration of every 2-3 weeks, AUROUS conducts a test of 3 hours based on JEE Advanced Exam Pattern.',
      },
      {
        icon: '/method-icons/mock.svg',
        title: 'Monthly Mock Test',
        description: 'Monthly Mock Test includes questions from all the topics completed upto the time. Full syllabus questions are covered in this Mock Test.',
      },
      {
        icon: '/method-icons/unit.svg',
        title: 'Unit Test',
        description: 'Unit tests are conducted for each subject on the completion of individual topics, and their score is also intimated to students as well as parents.',
      },
      {
        icon: '/method-icons/india.svg',
        title: 'All India Test Series',
        description: 'All India Test Series is conducted to help the student for evaluating his performance and understanding his All India Rank.',
      },
      {
        icon: '/method-icons/parent.svg',
        title: 'Parent Teacher Meeting',
        description: "To keep parents aware about their child's progress, regular Parent Teacher meetings are arranged on monthly basis.",
      },
    ],
  },
];

const OurMethodologies = () => {
  return (
    <main className={styles.page}>
      <section className={styles.originalTitle}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>ABOUT AUROUS</p>
          <h1>Our Methodologies</h1>
          <div className={styles.titleLine} />
          <p className={styles.intro}>
            A thoughtful approach to teaching, practice and progress&mdash;helping students build
            strong concepts and prepare with confidence.
          </p>
        </div>
      </section>

      {methodologySections.map((section) => {
        const isWide = section.number === '01' || section.number === '03';

        return (
          <section
            key={section.id}
            id={section.id}
            className={`${styles.methodSection}${isWide ? ` ${styles.wideGrid}` : ''}`}
          >
            <div className={styles.wrap}>
              <div className={styles.sectionHeading}>
                <span className={styles.headingIcon} aria-hidden="true">
                  {section.number}
                </span>
                <h2>{section.title}</h2>
                <span className={styles.headingRule} />
              </div>

              <div className={styles.methodGrid}>
                {section.cards.map((card) => (
                  <article key={card.title} className={styles.methodCard}>
                    <div className={styles.imageArea}>
                      <span className={styles.methodIcon}>
                        <img src={card.icon} alt="" width="48" height="48" aria-hidden="true" />
                      </span>
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default OurMethodologies;
