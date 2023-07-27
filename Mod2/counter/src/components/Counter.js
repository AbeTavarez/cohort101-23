import {useState} from 'react';
import styles from './Counter.module.css'

function Counter(props) {

  // declare a new state variable
  const [counter, setCounter] = useState(0);

  // gets call when the user clicks on the button
  const handleClick = () => {
    setCounter(counter + 1);
    // setCounter(prevState => prevState + 1); 
  }

  return (
    <div className={styles.container} >
      
      <h2>{props.title}</h2>
      <h3>{counter}</h3>

      <button onClick={handleClick}>Increase</button>

      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
