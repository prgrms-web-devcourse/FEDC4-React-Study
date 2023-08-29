import styles from './layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a>여성 옷</a>
        <a>남성 옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
