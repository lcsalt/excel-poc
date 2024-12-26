import { Title, Text, Button, Container, Group, Center } from '@mantine/core';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundTitle = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('notFound');
  return (
    <Container className={styles.root}>
      <div className={styles.label}>404</div>
      <Title className={styles.title}>{t('title')}</Title>
      <Text c="dimmed" size="lg" ta="center" className={styles.description}>
        {t('description')}
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={() => navigate(-1)}>
          {t('back_button_txt')}
        </Button>
      </Group>
    </Container>
  );
};

export default NotFoundTitle;
