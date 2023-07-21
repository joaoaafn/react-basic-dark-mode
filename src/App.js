import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider valeu={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <p>Hello World!</p>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;