// import LandingPage from "./pages/LandingPage/LandingPage";
import { AppContainer } from "./AppStyles";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { RoomsPage } from "./pages/RoomsPage/RoomsPage";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />}/>
            <Route path="/room-results" element={<RoomsPage />}/>
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  )
}

export default App
