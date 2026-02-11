import HomeCover from "@/components/home/HomeCover";
import Moto from "@/components/home/Moto";
const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <HomeCover />
      
    <div className="flex h-screen w-full flex-col items-center translate-y-[-5vh] justify-center">
      <Moto />
    </div>
    </main>
  );
};

export default Home;
