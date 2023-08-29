import { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요.',
};

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
