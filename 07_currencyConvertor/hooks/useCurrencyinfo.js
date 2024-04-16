import { useEffect, useState } from "react";

function useCoinInfo(coin){
    const [data, setData]=useState({})
    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}.json`)
        .then(res=>res.json())
        .then((res)=>setData(res.market_data.current_price))
    },[coin])
    console.log(data);
    return data
}

export default useCoinInfo;