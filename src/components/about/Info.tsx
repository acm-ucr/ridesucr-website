const Info = (props: { info: string }) => {
  return (
    <div className="text-ridesucr-white flex h-full w-full items-center justify-center bg-white/30 p-4 text-center text-2xl leading-6 md:text-3xl md:leading-8 lg:rounded-md lg:p-6 lg:text-4xl lg:leading-[1.6]">
      <div className="">{props.info}</div>
    </div>
  );
};

export default Info;
