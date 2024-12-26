import { Anchor, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' }
];

export function Navbar() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Anchor onClick={() => navigate('/')}>Application Logo</Anchor>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
        <Group visibleFrom="sm">
          <Button variant="default" onClick={() => navigate('/auth')}>
            Log in
          </Button>
        </Group>
      </div>
    </header>
  );
}
