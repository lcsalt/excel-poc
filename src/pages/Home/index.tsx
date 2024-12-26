import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import styles from './Home.module.css';
import { useTranslation } from 'react-i18next';
import cx from 'clsx';

type HomeProps = {};

const Home = ({}: HomeProps) => {
  const { i18n, t } = useTranslation('home');
  const tGeneral = useTranslation().t;

  const changeLanguage = () => {
    const currentLanguage = i18n.language;

    i18n.changeLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };
  <Button variant="light" onClick={changeLanguage}>
    {t('change_language')}
  </Button>;
  return (
    <div className={styles.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={styles.inner}>
        <Title className={styles.title}>
          {t('title_p1')}{' '}
          <Text component="span" inherit className={styles.highlight}>
            {t('title_p2')}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={styles.description}>
            {t('description')}
          </Text>
        </Container>

        <div className={styles.controls}>
          <Button className={cx(styles.control, styles.secondaryControl)} size="lg" onClick={changeLanguage}>
            {tGeneral('change_language')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
