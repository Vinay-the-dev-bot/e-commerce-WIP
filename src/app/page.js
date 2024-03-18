import ProductCard from "@/Components/ProductCard";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <>
      <Box className="flex flex-col gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}
