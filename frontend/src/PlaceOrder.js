import React from "react";
import { useState,useEffect } from "react"
import Axios from "axios";
import './index.css';
import Button from "react-bootstrap/button";


const PlaceOrder = ()=>{


    const[data, setData] = useState([]); 
    const [listofProducts, setlistofProducts] = useState([]);
  const [productId, setproductId] = useState(0); 
  const [productName, setproductName] = useState(""); 
  const [modelNumber, setmodelNumber] = useState(0); 
  const [manufacturer, setManufacturer] = useState(""); 
  const [packageQuantity, setpackageQuantity] = useState(0); 
  const [brandName, setbrandName] = useState("");
  const [confirmOrder, setconfirmedOrder] = useState("");

    useEffect(()=>{

        Axios.get("http://localhost:3001/getall").then((response)=>{

            setData(response.data); 
        }); 

    },[]); 

    const confirmedOrder = async ()=>{

        Axios.post("http://localhost:3001/cofirmedorder", {
    
          productId: listofProducts.productId, 
          productName:listofProducts.productName,
          modelNumber:listofProducts.modelNumber,
          manufacturer:listofProducts.manufacturer,
          packageQuantity:listofProducts.packageQuantity, 
          brandName:listofProducts.brandName, 
          confirmOrder

    
        }).then((response)=>{
    
          alert("placed successfully!") 
          setlistofProducts([...listofProducts, {
            productId,
            productName, 
            modelNumber,
            manufacturer,
            packageQuantity, 
            brandName, 
            confirmOrder:"Yes"
    
            
          }]);
          
           
          
          
        }); 
      }

    return(

        <div className="main">
        <div className="main-div">
        <div className="center">

        <h1 className="ordersummary">Order Summary</h1>
            {data.map(data=>{
                return(

                    <div>

                    <h6>Product Id</h6>
                    <p>{data.productId}</p>
                    <h6>Product Name</h6>
                    <p>{data.productName}</p>
                    <h6>Model Number</h6>
                    <p>{data.modelNumber}</p>
                    <h6>Manufacturer</h6>
                    <p>{data.manufacturer}</p>
                    <h6>Package Quantity</h6>
                    <p>{data.packageQuantity}</p>
                    <h6>Brand Name</h6>
                    <p>{data.brandName}</p>
                    <h6>Payment</h6>
                    <p>{data.payment}</p>
                    </div>


                ); 
                
            })}

            <Button variant="outline-primary" size="lg" type='submit' onClick={confirmedOrder}>Place Order</Button>
           
           </div>

           </div>

           
        </div>



 );
}



export default PlaceOrder; 