import { Box, Img, Text } from "@chakra-ui/react";
export default function ProductCard({ product }) {
  return (
    <>
      {/* <p>{JSON.stringify(product)}</p> */}
      <Box
        className="  m-auto flex justify-around p-5  rounded-lg "
        key={product.id}
        shadow={
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }
      >
        <Box className="w-3/5">
          <Text>
            <Text as="span">Product Name :</Text>
            {product.title}
          </Text>
          <Text>
            <Text as="span">Product Price :</Text>
            {product.price} Inr
          </Text>
          <Text>
            <Text as="span">Description :</Text> {product.description}
          </Text>
          <Text>
            <Text as="span">Category :</Text>
            {product.category}
          </Text>
          <Text className="font-bold">Ratings</Text>
          <Text>
            {product.rating.rate} Stars | {product.rating.count} Ratings
          </Text>
        </Box>
        <Img
          width={"40%"}
          bg={"transparent"}
          src={`${product.image}`}
          alt={`${product.title} asdas`}
        />
      </Box>
    </>
  );
}
