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
    <main className="flex min-h-screen flex-col items-center gap-12 mx-auto w-full font-poppins">
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
