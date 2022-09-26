
import {useEffect, useState} from "react"
function App() {
  useEffect(()=>{
    ff()
  },[])
  const [products,setProducts]=useState([{createdAt:11}])
  async function ff(){
    const data=await fetch("http://localhost:5000/api/goals/");
    const json = await data.json();
    setProducts(json)
    console.log(json) 
  }
  console.log(products)
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-center">Products</h1>

      <div className="flex justify-center p-12">
        <select className="text-center text-xl">
          {products.map((product)=>{
           return <option key={`${product._id}`}>{product.createdAt}</option>
          })}
        </select>
      </div>
      <div className="flex flex-col mx-auto">
        {products.map((product)=>{
            return(
              <div className="p-2 m-4">
              <p className="inline" key={`${product._id}`}>{product.name}</p>
              <span>amount:{product.amount}</span>
              <span>price:{product.price}</span>
              <span>total:{product.price*product.amount}</span>
              </div>
            ) 
            })}
        </div>
    </div>
  );
}

export default App;
