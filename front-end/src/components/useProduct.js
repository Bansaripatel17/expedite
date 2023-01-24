import {useState,useEffect} from 'react';

 const useProduct=(data)=> {
const [product,setProduct] = useState([]);



useEffect(()=>{
  setProduct([
  
    data
  ]);

},[data]);

  return{
    product,
    setProduct,
  }
}
export default useProduct;