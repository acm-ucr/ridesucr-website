import HomeCover from "@/components/home/HomeCover";
import Moto from "@/components/home/Moto";
const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <HomeCover />
      <div className="flex h-screen w-full flex-col items-center justify-center -mt-10">
        <Moto />
      </div>
    </div>
  );
};

export default Home;
