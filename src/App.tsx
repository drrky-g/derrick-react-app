import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks'
import { 
  IconHome2
 } from '@tabler/icons-react'

import { 
  MantineProvider,
  AppShell,
  Burger,
  Group,
  Container,
  NavLink
 } from '@mantine/core';

export default function App(){
const [opened, { toggle }] = useDisclosure();

  return <MantineProvider defaultColorScheme='auto'>{
      <AppShell
        header={{ height: 60 }}
        navbar={{width: 300, breakpoint:'sm', collapsed: {mobile: !opened }}}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
            This is my Header text...
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          Navigation Section...
          {Array(5).fill(0).map((_, index) => (
              <NavLink
              href="#required-for-focus"
              label={`Nav Link ${index + 1}`}
              leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            />
          ))}
        </AppShell.Navbar>
        <AppShell.Main>
          <Container>
            Main app stuff goes here...
          </Container>
        </AppShell.Main>
      </AppShell>
    }</MantineProvider>
}

