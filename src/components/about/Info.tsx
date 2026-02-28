const Info = (props: { info: string }) => {
  return (
    <div className="text-ridesucr-white flex h-full w-full items-center justify-center rounded-md bg-white/30 p-6 text-center text-base leading-6 backdrop-blur-lg sm:text-lg sm:leading-7 md:text-2xl md:leading-8 lg:text-4xl lg:leading-[1.3] xl:text-5xl xl:leading-[1.2]">
      <div className="max-w-prose">{props.info}</div>
    </div>
  );
};

export default Info;
