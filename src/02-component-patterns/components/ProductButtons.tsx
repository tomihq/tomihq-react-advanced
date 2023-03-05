import { IProductButtonsProps } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { useContext } from 'react';

export const ProductButtons = () =>{
    const {counter, increaseBy}:IProductButtonsProps = useContext(ProductContext);
    return(
       
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                > - </button>
                <div className={styles.countLabel}> {counter} </div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}
                >+</button>
            </div>
        

    )
}