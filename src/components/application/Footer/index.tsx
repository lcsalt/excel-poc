import { Container, Group, Anchor } from '@mantine/core';
import styles from './Footer.module.scss';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' }
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'> c="dimmed" key={link.label} href={link.link} onClick={(event) => event.preventDefault()} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <Group className={styles.links}>{items}</Group>
      </Container>
    </div>
  );
}
