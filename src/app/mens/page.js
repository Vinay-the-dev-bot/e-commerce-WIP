import ProductCard from "@/Components/ProductCard";

export default async function MensClothings() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const mensClothings = await res.json();
  return (
    <>
      <Box className="flex flex-col gap-5">
        {mensClothings.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}
