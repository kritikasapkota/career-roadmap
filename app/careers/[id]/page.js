'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styles from './detail.module.css';

import step1Img from '@/public/step1.png';
import step2Img from '@/public/step2.png';
import step3Img from '@/public/step3.png';
import step4Img from '@/public/step4.png';
import step5Img from '@/public/step5.png';

import airhostessImg from '@/public/airhostess.png';
import doctorImg from '@/public/doctor.png';
import engineerImg from '@/public/engineer.png';
import lawyerImg from '@/public/lawyer.png';
import pilotImg from '@/public/pilot.png';
import businessmanImg from '@/public/businessman.png';
import teacherImg from '@/public/teacher.png';
import artistImg from '@/public/artist.png';
import scientistImg from '@/public/scientist.png';
import cricketerImg from '@/public/cricketer.png';
import chefImg from '@/public/chef.png';
import architectImg from '@/public/architect.png';
import actorImg from '@/public/actor.png';
import writerImg from '@/public/writer.png';
import designerImg from '@/public/designer.png';

const stepImages = [step1Img, step2Img, step3Img, step4Img, step5Img];
const arrowColors = ['#FF5733', '#FFC300', '#28B463', '#5DADE2', '#9B59B6'];

const data = {
  doctor: {
    title: 'Doctor Roadmap',
    image: doctorImg,
    steps: [
      'Complete 10+2 with Biology',
      'Crack NEET exam',
      'Pursue MBBS',
      'Do MD/MS specialization',
      'Start practice or hospital job',
    ],
  },
  pilot: {
    title: 'Pilot Roadmap',
    image: pilotImg,
    steps: [
      'Complete 10+2 with PCM',
      'Join flying school',
      'Pass DGCA exams',
      'Fly 200 hours (CPL)',
      'Join airline as co-pilot',
    ],
  },
  airhostess: {
    title: 'Air Hostess Roadmap',
    image: airhostessImg,
    steps: [
      'Complete 10+2 with any stream',
      'Enroll in Air Hostess Training',
      'Get certified in hospitality & aviation',
      'Clear interviews with airlines',
      'Join and start flying',
    ],
  },
  engineer: {
    title: 'Engineer Roadmap',
    image: engineerImg,
    steps: [
      'Complete 10+2 with PCM',
      'Clear JEE/entrance exam',
      'Get B.Tech/BE degree',
      'Do internship or projects',
      'Join company or pursue M.Tech',
    ],
  },
  lawyer: {
    title: 'Lawyer Roadmap',
    image: lawyerImg,
    steps: [
      'Complete 10+2 in any stream',
      'Crack CLAT',
      'Study LLB (5 yrs)',
      'Intern with law firms',
      'Register & start practicing',
    ],
  },
  businessman: {
    title: 'Businessman Roadmap',
    image: businessmanImg,
    steps: [
      'Learn business fundamentals',
      'Optionally pursue BBA/MBA',
      'Start small venture',
      'Scale operations & network',
      'Grow into full business',
    ],
  },
  teacher: {
    title: 'Teacher Roadmap',
    image: teacherImg,
    steps: [
      'Complete 10+2',
      'Pursue graduation',
      'Do B.Ed/M.Ed',
      'Pass TET exam',
      'Join school/college',
    ],
  },
  artist: {
    title: 'Artist Roadmap',
    image: artistImg,
    steps: [
      'Start sketching & painting',
      'Join Fine Arts course',
      'Build portfolio',
      'Do exhibitions or freelance',
      'Earn via commissions/sales',
    ],
  },
  scientist: {
    title: 'Scientist Roadmap',
    image: scientistImg,
    steps: [
      'Complete 10+2 with Science',
      'Pursue B.Sc + M.Sc',
      'Clear NET/GATE exam',
      'Do PhD in specialization',
      'Work in research institute',
    ],
  },
  cricketer: {
    title: 'Cricketer Roadmap',
    image: cricketerImg,
    steps: [
      'Join cricket academy',
      'Practice with coach',
      'Play in tournaments',
      'Get into IPL/Ranji team',
      'Play for national team',
    ],
  },
  chef: {
    title: 'Chef Roadmap',
    image: chefImg,
    steps: [
      'Complete 10+2',
      'Join hotel mgmt course',
      'Work as kitchen trainee',
      'Join as junior chef',
      'Become head chef/start resto',
    ],
  },
  architect: {
    title: 'Architect Roadmap',
    image: architectImg,
    steps: [
      'Complete 10+2 with PCM',
      'Crack NATA exam',
      'Study B.Arch',
      'Intern with architect firm',
      'Join firm or freelance',
    ],
  },
  actor: {
    title: 'Actor Roadmap',
    image: actorImg,
    steps: [
      'Train in theatre/acting',
      'Make portfolio/showreel',
      'Go for auditions',
      'Do TV/web/film roles',
      'Become professional actor',
    ],
  },
  writer: {
    title: 'Writer Roadmap',
    image: writerImg,
    steps: [
      'Read & write consistently',
      'Study journalism/lit.',
      'Publish short stories/articles',
      'Build audience',
      'Publish books or write full-time',
    ],
  },
  designer: {
    title: 'Designer Roadmap',
    image: designerImg,
    steps: [
      'Learn design fundamentals',
      'Take design course',
      'Build strong portfolio',
      'Freelance or join company',
      'Keep updating skills',
    ],
  },
};

export default function CareerDetail() {
  const params = useParams();
  const id = params?.id;
  const career = data[id];

  if (!career) return <div className={styles.notfound}>Career not found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{career.title}</h1>
      <div className={styles.avatarWrapper}>
        <Image src={career.image} alt={career.title} width={250} height={250} />
      </div>
      <div className={styles.roadmap}>
        {career.steps.map((step, index) => (
          <div className={`${styles.stepCard} ${index % 2 === 0 ? styles.left : styles.right}`} key={index}>
            <Image src={stepImages[index]} alt={`Step ${index + 1}`} width={70} height={70} />
            <div className={styles.stepText}>
              <h3 style={{ color: arrowColors[index] }}>Step {index + 1}</h3>
              <p>{step}</p>
            </div>
            {index < career.steps.length - 1 && (
              <span className={styles.arrow} style={{ color: arrowColors[index] }}>➜</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
