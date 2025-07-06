import styles from'../App.module.css';
import Button from "./Button";
let Butt=["1","2","3","4","5","6","7","8","9","0","+","-","/","*","C","="];
const Container=({onButtonClick})=>{
    return(
        <div className={styles.container}>
            <Button B={Butt} onClick={onButtonClick}></Button>
      </div>
    );
}
export default Container;