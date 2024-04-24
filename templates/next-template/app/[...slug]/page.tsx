import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"
import { allTeams } from "contentlayer/generated"

import "@/styles/mdx.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { badgeVariants } from "@/registry/new-york/ui/badge"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

// getDocFromParams 함수:
async function getDocFromParams({ params }: DocPageProps) {
  const slug = '/' + params.slug?.join("/") || "";
  
  // params.slug[0]의 값에 따라 적절한 배열에서 문서를 찾습니다.
  let doc;
  if (params.slug[0] === 'docs') {
    doc = allDocs.find((doc) => doc.slug === slug);
  } else if (params.slug[0] === 'team') {
    doc = allTeams.find((doc) => doc.slug === slug);
  }

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
  return allDocs.map((doc) => ({
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
    <section className="container grid items-start gap-6 pb-8 pt-6 md:py-10 w-4/6">
      <div className="mx-auto w-full min-w-0">
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
    </section>
  )
}
