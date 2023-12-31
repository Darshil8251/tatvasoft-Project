// import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import BooksList from "./components/BooksList";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import globalStyles from "./styles/globalStyles";
import Form from "./components/Form";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "green",
          },
        },
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme} sx={{ color: "red" }}>
        <BrowserRouter>
          {/* <div>
        <img src={logo} alt='logo'></img>
      </div> */}
          <div
            // className='navbar'

            style={globalStyles.navbar}
            // style={{
            //   padding: 10,
            //   dispaly: "flex",
            //   justifyContent: "space-between",
            //   border: 'red',
            //   background: 'red',
            //   width: 120,

            // }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
            <NavLink to="/BookList" style={{ textDecoration: "none" }}>
              Books
            </NavLink>
            <NavLink to="/form" style={{ textDecoration: "none" }}>
              Register
            </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<HomePage username={"Darshil"} />}></Route>
            <Route path="/BookList" element={<BooksList />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
