import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { ButtonishLink } from './ui/buttonishLink';

export default function Home() {
  return (
    <main className="">
      <div className="h-container">
        <h2 className={styles.title}>
          Développeur·euse, il t'est déjà arrivé d'avoir des difficultés pour...
        </h2>
      </div>
      <ul className={styles.questions}>
        <li>Te sentir légitime dans le monde de la tech&nbsp;?</li>
        <li>Évaluer ton niveau réel&nbsp;?</li>
        <li>Exprimer tes insécurités au travail&nbsp;?</li>
        <li>Te motiver pour continuer à monter en compétences&nbsp;?</li>
      </ul>
      <ButtonishLink path="/why" isShaky>
        Grumpf, oui !
      </ButtonishLink>
    </main>
  );
}
