import React from "react";
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from "@mantine/core";

import { useAppShell } from "./index";

export const Shell: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  console.log("usq", user);
  console.log("score", score);
  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p="xs"
          style={{
            display: "flex",
            background: theme.colors.blue[8],
          }}
        >
          <Title
            style={{
              color: "white",
            }}
          >
            {title}
          </Title>
          <Box sx={{ flexGrow: 1 }}></Box>
          {
            <Box sx={{ display: "flex" }}>
              <Title
                mr="md"
                style={{
                  color: "white",
                }}
              >
                {user} - {score}
              </Title>
              <Button variant="light" onClick={() => setUser(null)}>
                Logout
              </Button>
            </Box>
          }
          {!user && (
            <Button variant="light" onClick={() => setUser("Jack")}>
              Login
            </Button>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
