export const getProducts = async() => {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000))
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

export const getOneProdcutse = async(id:number) => { 
        await new Promise((resolve, reject) => setTimeout(resolve, 3000))
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log('Heeeee')
        return data;

}