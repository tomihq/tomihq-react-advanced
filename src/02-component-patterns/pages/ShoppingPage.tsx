import { ProductTitle, ProductButtons, ProductImage, ProductCard } from '../components';
import '../styles/custom-styles.css'
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
           <ProductCard product={product} className='bg-dark text-white'>
                <ProductCard.Image  className='custom-image'/>
                <ProductCard.Title  className='text-white text-bold'/>
                <ProductCard.Buttons className='custom-buttons'  />
            </ProductCard>

            <ProductCard product={product} className='bg-dark text-white' >
                <ProductImage className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
                <ProductTitle  style={{fontWeight: 'bold'}} />
                <ProductButtons 
                  className='custom-buttons' 
                  style={{display: 'flex', backgroundColor: 'black'}} 
                  styleButtonIncreaseCounter={{color: 'white'}} 
                />
            </ProductCard>
            
        </div>
    </div>
  )
}
