import { createDirectus, rest, authentication } from "@directus/sdk";
import { DIRECTUS_URL } from "./vars";

const directus = createDirectus(DIRECTUS_URL)
  .with(authentication("cookie", { credentials: "include", autoRefresh: true }))
  .with(rest());

export default directus;
