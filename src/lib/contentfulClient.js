import { createClient } from "contentful";
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "3xmhwx5lmvjb",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    "4f8b1c66aa6af80a62e2e043d5bbb53b586cd425c730fd6d7d8a3c3d84504657",
});

export default client;
