import Example from "@/components/Example";
import Moto from "@/components/home/Moto";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Moto />
      <Example text1="Adjust" text2="These" text3="Props" />
    </div>
  );
};

export default Home;
