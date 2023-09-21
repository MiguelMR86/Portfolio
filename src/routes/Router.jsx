import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/index/Loader";
const Index = lazy(() => import("../pages/Index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Index />
      </Suspense>
    )
  },
//   {
//     path: "/test",
//     element: (
//       <Suspense fallback={<Loading />}>
//         <test />
//       </Suspense>
//     )
//   },
]);

export default router;