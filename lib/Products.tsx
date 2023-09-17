import { cache } from "react";

export const getProducts = async() => {
    const res = await fetch('https://dummyjson.com/products', {next: {revalidate : 60}});
    const data = await res.json();
    await new Promise((resolve, reject) => setTimeout(resolve, 1500))
    return data;
}

export const getOneProdcutse = async(id:number) => { 
    const res = await fetch(`https://dummyjson.com/products/${id}`, {cache: 'no-store'});
    const data = await res.json();
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        return data;

}