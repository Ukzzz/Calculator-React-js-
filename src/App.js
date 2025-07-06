import styles from './App.module.css';
import Container from './components/button-container';
import Display from './components/display';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        setCalVal(eval(calVal).toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.Calculator}>
      <Display displayVal={calVal} />
      <Container onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
