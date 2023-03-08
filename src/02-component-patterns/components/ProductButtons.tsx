import { IProductButtonsProps } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { useContext } from 'react';

export interface Props{
    className?:string;
    style?: React.CSSProperties
    styleButtonIncreaseCounter?: React.CSSProperties
}

export const ProductButtons = ({className, style, styleButtonIncreaseCounter}:Props) =>{
    const {counter, increaseBy}:IProductButtonsProps = useContext(ProductContext);
    return(
       
            <div className={`${styles.buttonsContainer} ${className}`} style={style}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                > - </button>
                <div className={styles.countLabel}> {counter} </div>
                <button
                    className={styles.buttonAdd}
                    style={styleButtonIncreaseCounter}
                    onClick={() => increaseBy(+1)}
                >+</button>
            </div>
        

    )
}