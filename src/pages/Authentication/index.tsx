import { Anchor, Button, Center, Checkbox, Container, Divider, Group, Paper, PaperProps, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { useTranslation } from 'react-i18next';
import styles from './Authentication.module.css';
import { isEmail, isValidPassword } from '../../utils/validation';

export default function Authentication(props: PaperProps) {
  const { t } = useTranslation('authentication');
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false
    },

    validate: {
      email: (val) => (isEmail(val) ? null : t('email_error')),
      password: (val) => (isValidPassword(val) ? null : t('password_error')),
      terms: (val) => (val ? null : t('terms_error'))
    }
  });

  return (
    <Center h="80vh">
      <Paper radius="md" p="xl" withBorder w={420} {...props}>
        <Text size="lg" fw={500}>
          {t('title_p1')} {t(type)} {t('title_p2')}
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">{t('google')}</GoogleButton>
        </Group>

        <Divider label={t('email_title')} labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label={t('name_label')}
                placeholder={t('name_placeholder')}
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label={t('email_label')}
              placeholder="x@x.x"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email}
              radius="md"
            />

            <PasswordInput
              required
              label={t('password_label')}
              placeholder={t('password_placeholder')}
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label={t('terms_and_conditions')}
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                error={form.errors.terms}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register' ? t('switch_login') : t('switch_register')}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(t(type))}
            </Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}
