import ProductCard from "@/Components/ProductCard";

export default async function Jewelery() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const jeweleryProducts = await res.json();
  return (
    <>
      <Box className="flex flex-col gap-5">
        {jeweleryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}
