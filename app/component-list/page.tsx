'use client';

import { Button } from "@/components/ui/button";
import { AttachmentIcon } from "@/icons";
import { useState } from "react";

export default function ComponentList() {
	
	return (
		<>
			<div className="w-[1028px] m-auto my-8 border border-red p-5">
				<div>
				<h1 className="h1">Button Component</h1>
				<div className="flex flex-wrap gap-4">
                	<Button><AttachmentIcon /> Lorem</Button>
                	<Button disabled>Lorem</Button>
                	<Button variant='outline'>Lorem</Button>
                	<Button variant='ghost'>Lorem</Button>
					
                	<Button size='sm'>Lorem</Button>
                	<Button disabled size='sm'>Lorem</Button>
                	<Button size='sm' variant='outline'><AttachmentIcon /> Lorem</Button>
                	<Button size='sm' variant='ghost'>Lorem</Button>
				</div>
				</div>
            </div>
		</>
	);
}
