import { Suspense } from "react";
import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Box from "services/Box";

export const Layout = () => {
  return (
    <Box display='grid' gridTemplateColums='1fr 1fr'>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
}