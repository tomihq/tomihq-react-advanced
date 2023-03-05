import { ProductTitle, ProductButtons, ProductImage, ProductCard } from '../components';
const product = {
    id: "1",
    title: "Coffee Mug",
    img: '/coffee-mug.png'

}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1> 
        <hr /> 
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
           <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
            
        </div>
    </div>
  )
}
