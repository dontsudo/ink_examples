import React from "react";
import { Box, Text, useApp, useInput } from "ink";

const App: React.FC = () => {
  const { exit } = useApp();

  useInput((input, _) => {
    if (input === "q") {
      exit();
    }
  });

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Text>Do you know ink with react? 🤔</Text>
    </Box>
  );
};

export default App;
