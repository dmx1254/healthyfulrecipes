import MainPage from "@/components/MainPage";
import TopStoriesPage from "@/components/TopStoriesPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 mx-auto p-4 w-full max-w-7xl font-poppins">
      <MainPage />
      <TopStoriesPage />
    </main>
  );
}
