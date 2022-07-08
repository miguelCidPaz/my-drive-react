import { Desktop } from "./pages/Desktop";
import { useState } from "react";
import './styles.scss';
import { ProviderLogin } from "./components/Context/userContext";


function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ProviderLogin>
      <Desktop theme={theme} />

    </ProviderLogin>
  )
}

export default App;
