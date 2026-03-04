const Info = (props: { info: string }) => {
  return (
    <div className="text-ridesucr-white lgbackdrop-blur-lg flex h-full w-full items-center justify-center rounded-md bg-white/30 p-6 text-center text-base leading-6 sm:text-2xl sm:leading-7 md:text-3xl md:leading-8 lg:text-4xl lg:leading-[1.6]">
      <div className="">{props.info}</div>
    </div>
  );
};

export default Info;
