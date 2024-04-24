"use client"

import * as React from "react"
import { allTeams } from "contentlayer/generated"

import { Mdx } from "./mdx-components"

interface FrameworkDocsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: string
}

export function FrameworkDocs({ ...props }: FrameworkDocsProps) {
  const frameworkDoc = allTeams.find(
    (doc) => doc.slug === `/team/tempname/${props.data}`
  )

  if (!frameworkDoc) {
    return null
  }

  return <Mdx code={frameworkDoc.body.code} />
}
