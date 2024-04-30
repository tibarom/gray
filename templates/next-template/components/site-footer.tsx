import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"

// export function SiteFooter() {
//   return (
//     <footer className=" md:py-0  mr-4 ml-4 mt-4 mb-4 w-full h-full">
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

export function SiteFooter() {
  return (
    <footer className="wrapper mt-md flex flex-wrap items-center opacity-60 laptop:mt-xxl">
      <div className="container flex h-full items-center justify-between">
      <div className="flex w-full items-center gap-x-gutter">
        <div className="flex max-md:hidden flex-1 border-t laptop:block">
        <ul className="flex overflow-hidden">
        <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="/privacy">
              <p>Terms</p>
            </a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="/privacy">
              <span>Privacy</span></a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="mailto:support@apecoin.com">
              <span>Support</span>
            </a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="mailto:press@apecoin.com">
              <span>Press Inquiries</span>
            </a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_self" rel="" href="/assets/press/ApeCoin_Press_Kit.zip">
              <span>Press Kit</span>
              <svg className="ml-[6px]" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 7H6.5M3.5 0V5.6M3.5 5.6L1 3M3.5 5.6L6 3" stroke="#E5E5E5" stroke-width="0.7">
                </path>
              </svg>
            </a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1-ma1XhtSvuHgi6JG7a3k7Zy493FnIsRH/view?usp=share_link">
              <span>Trademark Guide</span> <svg className="ml-[6px]" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765" stroke="#E5E5E5" stroke-width="0.7">
                  </path>
                  </svg>
            </a>
          </li>
          <li className="tick group relative flex h-nav text-xs uppercase hover:before:h-[12px]">
            <a className="-ml-px flex items-center pr-lg" target="_blank" rel="noopener noreferrer" href="https://immunefi.com/bounty/apecoinmainnet/">
              <p>Bug Bounty
              </p>
              <svg className="ml-[6px]" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 0.5H0M6.5 0.5V7M6.5 0.5L0.382353 6.61765" stroke="#E5E5E5" stroke-width="0.7">
                </path>
              </svg>
            </a>
          </li>
          </ul>
      </div>
      <div className="tick relative z-50 flex h-nav flex-1 items-center border-t text-xs uppercase laptop:flex-[0_0_25%]">
        <div className="relative">
          <a className="tick flex h-nav w-lg items-center pr-sm" href="https://instagram.com/apecoindao" target="_blank" rel="noreferrer noopener">
            <span className="sr-only">Instagram</span>
            <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <clipPath id="a"><path d="m0 0h13.1613v13.1613h-13.1613z"></path></clipPath><g clipPath="url(#a)"><path d="m6.58071 1.18616c1.75703 0 1.96542.00658 2.65967.03839 1.78332.08116 2.61632.92732 2.69752 2.69751.0318.69371.0378.9021.0378 2.65913 0 1.75758-.0065 1.96542-.0378 2.65913-.0817 1.76858-.9125 2.61638-2.69752 2.69748-.69425.0318-.90154.0384-2.65967.0384-1.75704 0-1.96542-.0066-2.65913-.0384-1.78774-.0817-2.61636-.9317-2.69752-2.69803-.03181-.6937-.03839-.90154-.03839-2.65912 0-1.75704.00713-1.96488.03839-2.65913.08171-1.76965.91252-2.61636 2.69752-2.69752.69426-.03126.90209-.03784 2.65913-.03784zm0-1.18616c-1.7872 0-2.01094.00767742-2.71287.0394839-2.38988.1096771-3.718069 1.4356761-3.8277467 3.8277461-.03235485.70248-.04003226.92622-.04003226 2.71342 0 1.78719.00767741 2.01148.03948386 2.71341.1096771 2.38984 1.4356751 3.71804 3.8277451 3.82774.70248.0318.92622.0395 2.71342.0395 1.78719 0 2.01148-.0077 2.71342-.0395 2.38767-.1097 3.71917-1.4357 3.82717-3.82774.0324-.70193.0401-.92622.0401-2.71341 0-1.7872-.0077-2.01094-.0395-2.71288-.1075-2.38767-1.4352-3.71806-3.82723-3.8277377-.70248-.03235488-.92677-.0400323-2.71396-.0400323zm0 3.20148c-1.86617 0-3.37916 1.513-3.37916 3.37917 0 1.86616 1.51299 3.3797 3.37916 3.3797 1.86616 0 3.37916-1.51299 3.37916-3.3797 0-1.86617-1.513-3.37917-3.37916-3.37917zm0 5.57271c-1.21139 0-2.19355-.98161-2.19355-2.19354 0-1.21139.98216-2.19355 2.19355-2.19355 1.21138 0 2.19354.98216 2.19354 2.19355 0 1.21193-.98216 2.19354-2.19354 2.19354zm3.51299-6.49564c-.43654 0-.79025.35371-.79025.78968 0 .43596.35371.78967.79025.78967.4359 0 .7891-.35371.7891-.78967 0-.43597-.3532-.78968-.7891-.78968z" fill="#8a8a8a"></path></g></svg></a></div><div className="relative">
                <a className="tick flex h-nav w-lg items-center pr-sm" href="https://twitter.com/apecoin" target="_blank" rel="noreferrer noopener">
                  <span className="sr-only">Twitter</span><svg fill="none" height="11" viewBox="0 0 14 11" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.1613 1.49865c-.4842.21497-1.0047.35974-1.5508.425c.5577-.33397.986-.86316 1.1872-1.493809-.5215.309291-1.0995.534129-1.7148.655319-.4919-.524803-1.19438-.852738-1.9709-.852738-1.74332 0-3.02435 1.626518-2.63061 3.314998-2.24345-.11242-4.233-1.18726-5.565035-2.820901-.707419 1.213581-.366871 2.801161.835195 3.605101-.442-.01426-.858776-.13546-1.222356-.33781-.029613 1.25087.866996 2.42113 2.165576 2.68161-.38003.1031-.79625.12723-1.21961.04607.34329 1.07264 1.34026 1.853 2.52258 1.87493-1.13516.89003-2.56535 1.28762-3.99774 1.11871 1.19494.76607 2.61471 1.21307 4.13923 1.21307 5.01335 0 7.84577-4.23413 7.67467-8.03171.5276-.38113.9855-.85658 1.3474-1.39784z" fill="#8a8a8a">
                      </path>
                      </svg>
                      </a>
                      </div>
                      <div className="ml-auto">© GrayLab</div>
      </div>
      </div>
    </div>
  </footer>

  )
}
