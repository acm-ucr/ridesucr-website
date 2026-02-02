import Example from "@/components/Example";
import Moto from "@/components/home/Moto";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="These" text3="Props" />
      <Moto />
    </div>
  );
};

export default Home;
