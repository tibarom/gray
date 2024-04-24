import { allTeams } from "contentlayer/generated"
import { LinkedCard } from '@/components/mdx-components';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export const metadata = {
  title: "Team",
}

export default async function IndexPage() {
  const posts = allTeams
    // .filter((post) => post.published)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <hr className="my-8" />
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <LinkedCard href={post.slug} key={post._id}>
                <div className="flex items-start gap-4 w-5/6">
                  {post.avatar && (
                    <Avatar className="hidden h-28 w-28 sm:flex">
                      <AvatarImage src={post.avatar} alt={post.title} />
                      <AvatarFallback>{post.initials}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">
                      {post.title}
                    </div>
                    {post.description && (
                      <div className="text-sm text-muted-foreground">
                        {post.description}
                      </div>
                    )}
                  </div>
                </div>
              </LinkedCard>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
    </div>
  )
}
