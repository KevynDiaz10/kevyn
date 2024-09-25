import Introduction from "./components/introduction";
import CoverParticles from "./components/Particles";
import TransitionPage from "./components/transition-page";

export default function Home() {
  return (
      <main className="">
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <CoverParticles />
          <Introduction />
        </div>
      </main>
  );
}
