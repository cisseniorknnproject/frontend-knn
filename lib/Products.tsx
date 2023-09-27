import next from "next/types";

export const getProducts = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1500));
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

export const getOneProdcutse = async (id: number) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};
