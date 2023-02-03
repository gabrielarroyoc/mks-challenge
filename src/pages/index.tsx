import { useEffect } from "react";
import CartDrawer from "src/components/CartDrawer";
import { HomeTemplate } from "../templates/Home";
export default function Home() {
  return (
    <>
      <HomeTemplate />;
      <CartDrawer />
    </>
  );
}
