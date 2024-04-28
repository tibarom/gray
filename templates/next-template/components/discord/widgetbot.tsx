"use client"

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
  } from "@/registry/new-york/ui/sheet"

  
import Options from "@widgetbot/crate/dist/types/options"
import React from "react"
import { Button } from "@/registry/default/ui/button"

export default function WidgetForBgMusic(props: Options) {
	return (
	<Sheet> 
		<div className="absolute bottom-0 right-1/4">
		<SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
	</div>
	<SheetContent>
	  <SheetHeader>
		<SheetTitle>
			Are you absolutely sure?
		</SheetTitle>
		<SheetDescription>
		  This action cannot be undone. This will permanently delete your account
		  and remove your data from our servers.
		</SheetDescription>
	  </SheetHeader>
	</SheetContent>
  </Sheet>
	)
}
