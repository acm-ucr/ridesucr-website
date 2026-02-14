import HomeCover from "@/components/home/HomeCover";
import Moto from "@/components/home/Moto";
const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <HomeCover />
      <div className="-mt-10 flex h-screen w-full flex-col items-center justify-center">
        <Moto />
      </div>
    </div>
  );
};

export default Home;
