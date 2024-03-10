import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AppContainer } from "./AppStyles";
import { useEffect } from 'react';
import { fetchDemoAPI } from "./utils/fetchDemoAPI";

function App() {
  
  useEffect(() => {
    fetchDemoAPI();
  }, [])

  return (
    <AppContainer>
      <Header />
      <Footer />
    </AppContainer>
  )
}

export default App
