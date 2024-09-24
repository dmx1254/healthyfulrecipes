import React from "react";
import { NavUrls, SubCatUrl } from "@/lib/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const MobileAccordion = ({ nav }: { nav: NavUrls<SubCatUrl> }) => {
  // console.log(nav);
  return (
    // <Accordion type="single" collapsible className="w-full">
    //   <AccordionItem value="item-1" className="border-none">
    //     {/* <div className="flex flex-col items-start gap-2">
    //       {nav.subcategory.map((subcat) => (
    //         <AccordionContent key={subcat.subCatId}>
    //           {subcat.name}
    //         </AccordionContent>
    //       ))}
    //     </div> */}
    //     <AccordionContent>{nav.title}</AccordionContent>
    //   </AccordionItem>
    // </Accordion>
    <div className="w-full flex flex-col items-start my-3">
      <Link href={nav.linkUrl}>{nav.title}</Link>
    </div>
  );
};

export default MobileAccordion;
