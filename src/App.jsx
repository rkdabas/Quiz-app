import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScore from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route path="/" element={<Settings />}>
              </Route>
              <Route path="/questions" element={<Questions />}></Route>
              <Route path="/score" element={<FinalScore />}></Route>
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
