import styles from '@/app/ui/buttonishLink.module.css';
import Link from 'next/link';

interface ButtonishLinkProps {
  path: string;
  children: string;
  isShaky: boolean;
}

export function ButtonishLink({ children, path, isShaky }: ButtonishLinkProps) {
  return isShaky ? (
    <div className={styles.shaky}>
      <Link href={path} className={`${styles.button}`}>
        {children}
      </Link>
    </div>
  ) : (
    <Link href={path} className={`${styles.button}`}>
      {children}
    </Link>
  );
}
