import Info from "@/components/about/Info";

const InfoSection = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex w-1/2 flex-col justify-evenly">
        <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />
        <div className="w-2/5">
          <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to  students as well as the general public." />
        </div>
        <Info info="Feel free to support us by buying our awesome merch or visiting one of our meets!" />
      </div>
    </div>
  );
};

export default InfoSection;
