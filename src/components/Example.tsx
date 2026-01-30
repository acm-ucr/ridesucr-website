const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ridesucr-black flex w-3/4 items-center gap-1 justify-self-center p-8">
      <div className="bg-ridesucr-white w-1/2 p-5 text-left">{props.text1}</div>

      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;
