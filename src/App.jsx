import { MyRoutes } from "./routers/routes";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import { Light, Dark } from "./styles/Theme";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
export const ThemeContext = createContext(null);
function App() {
  const { user } = UserAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "active" : ""}>
              {user?.uid ? (
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              ) : null}
              <ContainerMyRoutes>
                {" "}
                <MyRoutes />
              </ContainerMyRoutes>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  background: ${({ theme }) => theme.bgtotal};
  min-height: 100vh;
  transition: all 0.3s;
  color: ${({ theme }) => theme.text};
  &.active {
    grid-template-columns: 220px 1fr;
  }
`;
const ContainerMyRoutes = styled.div`
  grid-column: 2;
  padding: 20px;
`;
export default App;
