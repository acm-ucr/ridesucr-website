const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ridesucr-black flex w-2/3 flex-col gap-4 justify-self-center rounded-md p-16">
      <div className="bg-ridesucr-gray w-full p-5 text-center text-black">
        {props.text1}
      </div>

      <div className="flex w-full flex-row gap-1">
        <div className="bg-ridesucr-green w-full rounded-lg p-5 text-center text-black">
          {props.text2}
        </div>
        <div className="bg-ridesucr-green w-full rounded-lg p-5 text-center text-black">
          {props.text2}
        </div>
      </div>

      <div className="bg-ridesucr-gray w-full p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
