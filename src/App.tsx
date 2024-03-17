import LandingPage from "./pages/LandingPage";
import { AppContainer } from "./AppStyles";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <LandingPage/>
      </AppContainer>
    </Provider>
  )
}

export default App
