import DiabeteDiet from "@/components/DiabeteDiet";
import HealthyLifestyle from "@/components/HealthyLifestyle";
import HealthyRecipes from "@/components/HealthyRecipes";
import HeroBottom from "@/components/HeroBottom";
import MainPage from "@/components/MainPage";
import MealPlans from "@/components/MealPlans";
import News from "@/components/News";
import TopStoriesPage from "@/components/TopStoriesPage";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-12 mx-auto font-poppins">
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
