import Pages from "./Pages";
import { useState } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((curr) => (curr === true ? false : true));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme ? "light" : "dark"}>
        <Pages />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
