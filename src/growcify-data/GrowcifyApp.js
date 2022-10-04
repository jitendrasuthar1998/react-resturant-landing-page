import React from 'react'
import axios from 'axios';

const api = "https://api.growcify.com/"
const storeId = "5f43efa177d8450017693efc"
const GrowcifyApp = () => {


    const getProducts = () => {

    }

    const getTrendingProducts = () => {
      return axios.get(api+'product/list/'+('trending' )+'/'+storeId).
      then((res) => JSON.stringify(res.data));
    }

    const getAllCategories = () => {
      return axios.get(api+'category/list/'+storeId+'/'+'parent').
      then((res) => JSON.stringify(res.data));
    
    }

    return (
    <div>
        <h1>Get Growcify Data</h1>
        <button style={{display:"block", width: "30%", height:40, margin: 40}} onClick={getProducts}>Get Products</button>

        <button onClick={()=> getTrendingProducts()} style={{display:"block", width: "30%", height:40, margin: 40}}>Get trending products</button>

        <button onClick={()=> getAllCategories()} style={{display:"block", width: "30%", height:40, margin: 40}}>Get All Categories</button>
    </div>
  )
}

export default GrowcifyApp