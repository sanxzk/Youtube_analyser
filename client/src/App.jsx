import { Grid } from "@mui/material";
import LandingPage from "./Pages/LandingPage";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./features/Store";

function App() {
  return (
    <Provider store={store}>
      <Grid>
        <Navbar />
        <LandingPage />
        <Footer />
      </Grid>
    </Provider>
  );
}

export default App;
