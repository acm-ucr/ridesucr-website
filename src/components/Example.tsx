const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ridesucr-black flex w-2/3 flex-col items-center gap-4 justify-self-center p-8 text-center text-3xl">
      <div className="bg-ridesucr-white w-1/2 rounded p-5 md:rounded-lg">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-ridesucr-white w-full rounded-full p-5">
          {props.text2}
        </div>
        <div className="bg-ridesucr-white w-full rounded-full p-5 text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-ridesucr-white w-1/2 rounded p-5 md:rounded-lg">
        {props.text1}
      </div>
    </div>
  );
};

export default Example;
