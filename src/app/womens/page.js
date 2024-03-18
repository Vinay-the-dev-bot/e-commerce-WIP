import ProductCard from "@/Components/ProductCard";
import { Box } from "@chakra-ui/react";

export default async function WomensClothings() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const womensClothings = await res.json();
  return (
    <>
      <Box className="flex flex-col gap-5">
        {womensClothings.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}
