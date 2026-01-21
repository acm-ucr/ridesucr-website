const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ridesucr-black w-2/3 gap-1 space-y-6 p-8">
      <div className="bg-ridesucr-gray flex w-3/4 justify-center justify-self-center p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="flex w-3/4 flex-row gap-1 justify-self-center text-center">
        <div className="bg-ridesucr-green w-full justify-self-center rounded-lg p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-ridesucr-green w-full justify-self-center rounded-lg p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      <div className="bg-ridesucr-gray w-3/4 justify-self-center p-5 text-center text-lg text-neutral-50">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
