import { NextSeo } from "next-seo";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";

const Page = ({ page }) => {
  return (
    <main>
      <NextSeo
        title={page.data?.seo_title}
        description={page.data?.seo_description}
        canonical={page.data?.seo_canonical_url}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const uid = params.path?.[params.path.length - 1] || "home";
  const page = await client.getByUID("page", uid, {
    graphQuery: `{
      page {
        uid
        title
        slices {
          ... on guides {
            variation {
              ... on default {
                primary {
                  title
                  description
                }
                items {
                  material {
                    ... on material {
                      title
                      uid
                      type
                      file
                      description
                    }
                  }
                }
              }
            }
          }
        }
        ...pageFields
      }
    }`,
  });

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const documents = await client.getAllByType("page");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
}
