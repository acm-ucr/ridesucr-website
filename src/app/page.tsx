import Example from "@/components/Example";

/*const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="These" text3="Props" />
    </div>
  );
};*/

//export default Home;
const Home = () => {
  return (
 <div className="flex h-screen w-screen items-center justify-center">
      
     <div className="flex w-2/3 flex-col gap-6 rounded-lg p-6">
        {/* Inner boxes */} 
        
        <div className="flex items-center justify-center rounded-md p-6 text-2xl box1">
           style={{ backgroundColor: "var(--color-ridesucr-lightred)" }}
           
        box 1
        </div>
       
        <div className="flex items-center justify-center rounded-full p-6 text-2xl box2">
           style={{ backgroundColor: "var(--color-ridesucr-orange)" }}
           
           box 2
        </div>

       <div className="flex items-center justify-center rounded-md p-6 text-2xl box3">
           style={{ backgroundColor: "var(--color-ridesucr-mintgreen)" }}
           box 3
        </div>

        <div className="flex items-center justify-center rounded-full p-6 text-2xl text-white box4">
           style={{ backgroundColor: "var(--color-ridesucr-blue)" }}
           box 4
        </div>
      </div>
    </div>
  );
};

export default Home;