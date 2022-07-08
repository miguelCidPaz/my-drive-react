import { Desktop } from "./pages/Desktop";
import { useState } from "react";
import './styles.scss';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <Desktop theme={theme} />
  )
}

export default App;
