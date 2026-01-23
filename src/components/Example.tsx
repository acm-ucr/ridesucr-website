const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ridesucr-black flex w-2/3 flex-col items-center justify-evenly gap-5 justify-self-center rounded-sm p-8">
      <div className="bg-ridesucr-gray w-1/2 p-5 text-center text-xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-ridesucr-green w-full rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-ridesucr-green w-full rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="bg-ridesucr-gray text-ridesucr-white w-1/2 p-5 text-center text-xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
