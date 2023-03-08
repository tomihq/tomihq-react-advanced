import { Props as ProductCardButtons } from '../components/ProductButtons';
import { Props as ProductCardImage } from '../components/ProductImage';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductCardTitle } from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps{
    counter: number;
    product: Product
    increaseBy: (val: number) => void;
}

export interface IProductButtonsProps{
    counter: number;
    increaseBy: (val: number) => void;
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps):JSX.Element
    Title:(Props: ProductCardTitle) => JSX.Element
    Image:(Props: ProductCardImage) => JSX.Element
    Buttons: (Props: ProductCardButtons) => JSX.Element
}

