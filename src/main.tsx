import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TanStackProvider } from "./plugins/TanStackProvider.tsx";

import "../global.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <TanStackProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </TanStackProvider>
);
