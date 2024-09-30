import React, { Suspense } from "react";

import { Params } from "@/lib/type";
import DetailPageSkeleton from "@/components/skelettons/DetailPageSkeleton";
import DetailHealthyHeating from "@/components/singlepages/DetailHealthyHeating";

const HealthyEatingSinglePage = ({ params }: { params: Params }) => {
  const newsSlug = params.id || "";
  //   console.log(newsId);
  const slug = newsSlug.split("-").slice(0, -1).join("-");
  const slugId = newsSlug.split("-").slice(-1).join();
  //   console.log(slug);
  //   console.log(slugId);
  return (
    <div className="font-poppins w-full max-w-5xl flex flex-col items-center mx-auto p-4">
      <Suspense
        key={slug || "" + slugId || ""}
        fallback={<DetailPageSkeleton />}
      >
        <DetailHealthyHeating slug={slug} slugId={slugId} />
      </Suspense>
    </div>
  );
};

export default HealthyEatingSinglePage;
