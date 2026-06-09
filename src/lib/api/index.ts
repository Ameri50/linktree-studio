import { AnyRouter } from "@tanstack/react-router";
import { createRequestHandler } from "@tanstack/react-start/server";

export const config = {
  runtime: "edge",
};

export default createRequestHandler({
  createRouter: () => {
    // Provide your router implementation here
    return {} as AnyRouter;
  },
  request: new Request(""), // Replace with the actual request object
  getRouterManifest: async () => {
    // Provide your server manifest implementation here
    return {
      routes: {}, // Replace with the actual routes object
    }; // Replace with the actual server manifest object
  },
});
