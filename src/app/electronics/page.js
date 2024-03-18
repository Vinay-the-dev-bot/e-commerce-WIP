import ProductCard from "@/Components/ProductCard";
import { Box } from "@chakra-ui/react";

export default async function electronics() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const electronicsProducts = await res.json();
  return (
    <>
      <Box className="flex   gap-5">
        <Box className="  bg-red-500 " width={"25%"}></Box>
        <Box
          width={"70%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          {electronicsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </>
  );
}
