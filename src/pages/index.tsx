import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.title}>Musawat Game - Built by Rida Ateeq</h1>
      <p className={styles.description}>Introduction to the Game:</p>
      <p className={styles.description}>
        Step into the shoes of a skilled lawyer, known for your sharp mind and deep understanding of workplace laws. One day, a woman named Sara arrives at your chambers, seeking help. She is hoping you can guide her through the intricacies of workplace harassment laws in Pakistan.
      </p>
      <p className={styles.description}>Your mission is to:</p>
      <ol className={styles.description}>
        <li>Explain the laws, procedures, and her rights under the law.</li>
        <li>Solve challenging legal puzzles and provide the right answers to earn her trust.</li>
      </ol>
      <p className={styles.description}>
        Each correct answer helps Sara move one step closer to understanding her rights and protecting herself. But beware – tricky scenarios and tough questions will test your legal knowledge!
      </p>
      <p className={styles.description}>Are you ready to step into this role, assist Sara, and prove your expertise? Let the legal adventure begin!</p>
      <Link href="/quiz">
        <a className={styles.startBtn}>Start Game</a>
      </Link>
    </div>
  );
}
