import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter() {
  return (
    <footer className=" md:py-0  mr-4 ml-4 mt-4 mb-4 w-full h-full">
        <div className="mb-sm flex-1 text-xs">
        <p className="text-balance text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GrayLab
          </a>
          .
        </p>
        </div>
    </footer>
  )
}

// export function SiteFooter() {
//   return (
//     <footer className="py-6 md:py-0 z-0 mr-4 ml-4 mt-4 mb-4">
//       <ul className="flex overflow-hidden justify-between border-t">
//         <li className="w-0 h-1/2 border-l border-blue-500 p-6 tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//         {/* <div className="w-0 h-1/2 border-l border-blue-500"></div> */}
//           <a className="flex left-0 pr-lg" target="_self" rel="" href="/terms">
//             <p>Terms</p>
//           </a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="/privacy">
//             <span>Privacy</span></a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="mailto:support@apecoin.com">
//             <span>Support</span>
//           </a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="mailto:press@apecoin.com">
//             <span>Press Inquiries</span>
//           </a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="/assets/press/ApeCoin_Press_Kit.zip">
//             <span>Press Kit</span>
//             <svg className="ml-[6px]" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0.5 7H6.5M3.5 0V5.6M3.5 5.6L1 3M3.5 5.6L6 3" stroke="#E5E5E5" stroke-width="0.7">
//               </path>
//             </svg>
//           </a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1-ma1XhtSvuHgi6JG7a3k7Zy493FnIsRH/view?usp=share_link">
//             <span>Trademark Guide</span> <svg className="ml-[6px]" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765" stroke="#E5E5E5" stroke-width="0.7">
//                 </path>
//                 </svg>
//           </a>
//         </li>
//         <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
//           <a className="-ml-px flex items-center pr-lg" target="_blank" rel="noopener noreferrer" href="https://immunefi.com/bounty/apecoinmainnet/">
//             <p>Bug Bounty
//             </p>
//             <svg className="ml-[6px]" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765" stroke="#E5E5E5" stroke-width="0.7">
//               </path>
//             </svg>
//           </a>
//         </li>
//         </ul>
//         <div className="mb-sm flex-1 text-xs">
//         <p className="text-balance text-left text-sm leading-loose text-muted-foreground">
//           Built by{" "}
//           <a
//             href={siteConfig.links.twitter}
//             target="_blank"
//             rel="noreferrer"
//             className="font-medium underline underline-offset-4"
//           >
//             GrayLab
//           </a>
//           .
//         </p>
//         </div>
//     </footer>
//   )
// }



      {/* <div className="bg-invert-0">
        <div className="mt-28 pb-28" aria-hidden="true">
            <div className="-mt-6">
            <div className="bg-background h-6 opacity-5"></div>
            <div className="bg-muted h-1 opacity-10"></div>
            <div className="bg-background h-5 opacity-10"></div>
            <div className="bg-muted h-1 opacity-10"></div>
            <div className="bg-background h-5 opacity-10"></div>
            <div className="bg-muted h-2 opacity-15"></div>
            <div className="bg-background h-4 opacity-15"></div>
            <div className="bg-muted h-3 opacity-20"></div>
            <div className="bg-background h-4 opacity-20"></div>
            <div className="bg-muted h-4 opacity-25"></div>
            <div className="bg-background h-5 opacity-25"></div>
            <div className="bg-muted h-5 opacity-30"></div>
            <div className="bg-background h-4 opacity-30"></div>
            <div className="bg-muted h-6 opacity-35"></div>
            <div className="bg-background h-4 opacity-35"></div>
            <div className="bg-muted h-7 opacity-40"></div>
            <div className="bg-background h-4 opacity-40"></div>
            <div className="bg-muted h-8 opacity-45"></div>
            <div className="bg-background h-4 opacity-45"></div>
            <div className="bg-muted h-9 opacity-50"></div>
            <div className="bg-background h-4 opacity-50"></div>
            <div className="bg-muted h-10 opacity-55"></div>
            <div className="bg-background h-3 opacity-55"></div>
            <div className="bg-muted h-11 opacity-60"></div>
            <div className="bg-background h-3 opacity-60"></div>
            <div className="bg-muted h-12 opacity-65"></div>
            <div className="bg-background h-3 opacity-65"></div>
            <div className="bg-muted h-13 opacity-70"></div>
            <div className="bg-background h-3 opacity-70"></div>
            <div className="bg-muted h-14 opacity-75"></div>
            <div className="bg-background h-3 opacity-75"></div>
            <div className="bg-muted h-15 opacity-80"></div>
            <div className="bg-background h-2 opacity-80"></div>
            <div className="bg-muted h-16 opacity-85"></div>
            <div className="bg-background h-2 opacity-85"></div>
            <div className="bg-muted h-17 opacity-90"></div>
            <div className="bg-background h-2 opacity-90"></div>
            <div className="bg-muted h-18 opacity-95"></div>
            <div className="bg-background h-2 opacity-95"></div>
            <div className="bg-muted h-19 opacity-100"></div>
            <div className="bg-background h-2 opacity-100"></div>
            <div className="bg-muted h-20 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            <div className="bg-muted h-21 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            <div className="bg-muted h-22 opacity-100"></div>
            <div className="bg-background h-1 opacity-100"></div>
            </div>
        </div>
      </div> */}