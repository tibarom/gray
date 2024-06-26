import { notFound } from "next/navigation"
import { allWritings } from "contentlayer/generated"
import Image from "next/image"

import "@/styles/mdx.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import { formatDate } from "@/lib/utils"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

// getDocFromParams 함수:
async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  
  // params.slug[0]의 값에 따라 적절한 배열에서 문서를 찾습니다.
  let doc;

  // console.log("slug: ", slug)
  // console.log("doc: ", doc)
  doc = allWritings.find((doc) => doc.slugAsParams === slug);
 
  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allWritings.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function IndexPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10 bg-background/80">
      {/* {doc.image && (
        <Image
          src={doc.image}
          alt={doc.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )} */}


      <div>
        <h1 className="mt-2 inline-block font-bold leading-tight sm:text-2xl lg:text-3xl mb-4">
          {doc.title}
      </h1>
      {/* <p className="text-muted-foreground">{doc.description}</p> */}
      <p className="text-sm text-muted-foreground mb-8">
        by {doc.authors.map(author => author).join(", ")} on {formatDate(doc.date)}</p>
      </div>
      <Mdx code={doc.body.code} />
      <hr className="mt-12" />
    </article>
  )
}
