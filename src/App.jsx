import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";

import Box from "@mui/material/Box";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
