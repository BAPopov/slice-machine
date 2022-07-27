//Imports
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (link) => {
  if (link.type === "page") {
    if (link.uid === "home") {
      return "/";
    }

    return `/${link.uid}`;
  }

  return "/";
};

/**
 * @param config
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config?.previewData,
    req: config?.req,
  });

  return client;
};
