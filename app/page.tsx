import DiabeteDiet from "@/components/DiabeteDiet";
import HealthyLifestyle from "@/components/HealthyLifestyle";
import HealthyRecipes from "@/components/HealthyRecipes";
import HeroBottom from "@/components/HeroBottom";
import MainPage from "@/components/MainPage";
import MealPlans from "@/components/MealPlans";
import News from "@/components/News";
import TopStoriesPage from "@/components/TopStoriesPage";
// import { getPostId } from "@/lib/api/posts";
// import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // const { userId } = auth();
  // const user = await currentUser();
  // const catId = await getPostId();
  // console.log(catId);

  // console.log("userId: " + userId);
  // console.log("user: ", JSON.stringify(user, null, 2));
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-12 mx-auto my-2 font-poppins mb-14">
      <MainPage />
      <TopStoriesPage />
      <News />
      <MealPlans />
      <DiabeteDiet />
      <HealthyLifestyle />
      <HeroBottom />
      <HealthyRecipes />
    </main>
  );
}
