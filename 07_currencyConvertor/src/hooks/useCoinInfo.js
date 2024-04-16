import { useEffect, useState } from "react";

// write a function to get symbol name from symbol to append in the url

async function getCryptoNames(symbols) {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const names = {};
        for (const symbol of symbols) {
            const name = data[symbol.toUpperCase()];
            if (name) {
                names[symbol] = name;
            } else {
                names[symbol] = "Unknown";
            }
        }

        return names;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


function useCoinInfo(coin){
    const [data, setData]=useState({})
    
    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${getCryptoNames(coin)}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res.market_data.current_price))
    },[coin])
    console.log(data);
    console.log('hi');
    return data
}
export default useCoinInfo;