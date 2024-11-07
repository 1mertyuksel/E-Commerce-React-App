  import React, { useEffect } from 'react'
  import { useSelector , useDispatch} from 'react-redux';
  import { useParams } from 'react-router-dom';
  import { useState } from 'react';
  import Product from './Product';
  import {setSelectedProduct} from '../redux/slices/productSlice';
  import { CiCirclePlus } from "react-icons/ci"; 
  import { CiCircleMinus } from "react-icons/ci"; 
  import { addToCart } from '../redux/slices/cartSlice';


  function ProductDetails() {
    const {id} = useParams();
    const {products,selectedProduct} = useSelector((store) => store.product)
    
    const { price , image , title , description } = selectedProduct;

    const[count,setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
      setCount(count + 1)
  }

  const decrement = () => {
      setCount(count - 1)
  }

  const addCart = () => {

    const payload ={
      id,
      price,
      image,
      title,
      description,
      count
    }
  dispatch(addToCart(payload))
  }

    useEffect(()=>{
      getProductById();
    },[])

    const getProductById = () => {
      products && products.map((product) => {
          if(product.id == id){
              dispatch(setSelectedProduct(product))
          }
      })
      
    }

      return (
        <div className='flex-row' style={{marginTop:'30px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <div style={{marginRight:'40px'}}>
          <img src={image} width={300} height ={500} alt="" />
          </div>
          <div>
              <h1 style={{fontFamily:'arial'}}>{title}</h1>
              <p style={{fontFamily: 'arial',fontSize:'20px'}}>{description}</p>
              <h1 style={{fontFamily: 'arial',fontSize:'50px',fontWeight:'bold',color:'blue'}}>{price}$</h1>
              <div className='flex-row'>
              <CiCirclePlus onClick={increment} style={{fontSize:'30px'}} /> <span style={{fontSize:'35px'}}>{count}</span> <CiCircleMinus onClick={decrement} style={{fontSize:'30px'}}/>
              </div>

              <div>
                  <button
                  onClick={addCart}
                  style={{marginTop:'25px', border:'none', padding:'12px',backgroundColor:'orange',borderRadius:'5px'}}>Sepete Ekle</button>
              </div>
          </div>

        </div>
    )
  }

  export default ProductDetails
