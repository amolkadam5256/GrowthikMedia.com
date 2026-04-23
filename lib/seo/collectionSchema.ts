import { CONTACT_INFO, STRUCTURED_DATA_IDS } from "@/constants/contact";
import type { PortfolioProject } from "@/lib/data/portfolio";

type CollectionSchemaOptions = {
  path: string;
  name: string;
  description: string;
  breadcrumbName: string;
  itemName?: string;
  items?: Array<{
    name: string;
    url: string;
  }>;
};

export function buildCollectionSchema({
  path,
  name,
  description,
  breadcrumbName,
  itemName,
  items = [],
}: CollectionSchemaOptions) {
  const url = `${CONTACT_INFO.website}${path}`;
  const pageId = `${url}#webpage`;
  const itemListId = `${url}#itemlist`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageId,
        url,
        name,
        description,
        isPartOf: {
          "@id": STRUCTURED_DATA_IDS.website,
        },
        about: {
          "@id": STRUCTURED_DATA_IDS.organization,
        },
        mainEntity: items.length
          ? {
              "@id": itemListId,
            }
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${CONTACT_INFO.website}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName,
            item: url,
          },
        ],
      },
      ...(items.length
        ? [
            {
              "@type": "ItemList",
              "@id": itemListId,
              name: itemName || name,
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              numberOfItems: items.length,
              itemListElement: items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: item.url,
                name: item.name,
              })),
            },
          ]
        : []),
    ],
  };
}

export function buildPortfolioItemListItems(projects: PortfolioProject[]) {
  return projects.map((project) => ({
    name: project.title,
    url: `${CONTACT_INFO.website}/portfolio/${project.slug}/`,
  }));
}
