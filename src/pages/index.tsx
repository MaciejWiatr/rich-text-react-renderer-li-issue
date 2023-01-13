import Head from "next/head";
import { RichText, RichTextProps } from "@graphcms/rich-text-react-renderer";

export const failingCMSContent: RichTextProps["content"] = {
  children: [
    {
      type: "bulleted-list",
      children: [
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Rodzaj nieruchomości,",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Powierzchnia nieruchomości,",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "lokalizacja mieszkania",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Roku budowy,",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Standard mieszkania,",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Stan technicznego,",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "list-item",
          children: [
            {
              type: "list-item-child",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "list-item-child",
                      children: [
                        {
                          text: "Dostęp do infrastruktury. ",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>LI tag issue</title>
      </Head>

      <div>
        <RichText content={failingCMSContent} />
      </div>
    </>
  );
}
