import Image from "next/image"
import Link from "next/link"
import { allWritings } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Writing",
}

export default async function IndexPage() {
  const posts = allWritings
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  
  return (
    <div className="container max-w-4xl py-6 lg:py-10 h-screen bg-background/80">
      <div className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 grid-cols-1">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {/* {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )} */}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  by {post.authors.map(author => author).join(", ")} on {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
