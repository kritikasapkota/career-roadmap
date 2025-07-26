
'use client';
import styles from './careers.module.css';

const careers = [
  { id: 'airhostess', name: 'Air Hostess', img: '/airhostess.png' },
  { id: 'doctor', name: 'Doctor', img: '/doctor.png' },
  { id: 'lawyer', name: 'Lawyer', img: '/lawyer.png' },
  { id: 'engineer', name: 'Engineer', img: '/engineer.png' },
  { id: 'pilot', name: 'Pilot', img: '/pilot.png' },
  { id: 'businessman', name: 'Businessman', img: '/businessman.png' },
  { id: 'teacher', name: 'Teacher', img: '/teacher.png' },
  { id: 'chef', name: 'Chef', img: '/chef.png' },
  { id: 'architect', name: 'Architect', img: '/architect.png' },
  { id: 'designer', name: 'Designer', img: '/designer.png' },
  { id: 'actor', name: 'Actor', img: '/actor.png' },
  { id: 'scientist', name: 'Scientist', img: '/scientist.png' },
  { id: 'artist', name: 'Artist', img: '/artist.png' },
  { id: 'cricketer', name: 'Cricketer', img: '/cricketer.png' },
  { id: 'writer', name: 'Writer', img: '/writer.png' },
];

export default function Careers() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🌟 Explore Exciting Careers</h2>
      <div className={styles.grid}>
        {careers.map((career) => (
          <a href={`/careers/${career.id}`} key={career.id} className={styles.card}>
            <img src={career.img} alt={career.name} />
            <h3>{career.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
