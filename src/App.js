import { Desktop } from "./pages/Desktop";
import { useState } from "react";
import './styles.scss';
import { ProviderLogin } from "./components/Context/userContext";


function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ProviderLogin>
      <Desktop theme={theme} changeTheme={changeTheme} />
    </ProviderLogin>
  )
}

export default App;
