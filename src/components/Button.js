import styles from'../App.module.css';
const Button = ({B , onClick})=>{
    return(
        <>
        {B.map(item=><button className={styles.button} onClick={()=>onClick(item)} key={item}> {item} </button>)}
        </>    
    );
}
export default Button;