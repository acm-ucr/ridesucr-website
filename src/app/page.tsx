import HomeCover from "@/components/home/HomeCover";
import Moto from "@/components/home/Moto";
const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <HomeCover />

      <div className="flex h-screen w-full translate-y-[-5vh] flex-col items-center justify-center">
        <Moto />
      </div>
    </main>
  );
};

export default Home;
