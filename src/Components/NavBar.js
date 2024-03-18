import { Box } from "@chakra-ui/react";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <Box className="flex   m-auto my-10   border-black    justify-around">
        <Link href="/">Products</Link>
        <Link href="/electronics">Electronics</Link>
        <Link href="/jewelery">Jewelery</Link>
        <Link href="/mens">Men's</Link>
        <Link href="/womens">Women's </Link>
      </Box>
    </>
  );
}
