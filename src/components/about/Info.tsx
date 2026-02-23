const Info = (props: { info: string }) => {
  return (
    <div className="text-ridesucr-white flex h-full w-full items-center justify-center gap-4 rounded-md bg-white/30 p-8 text-center text-5xl/10 backdrop-blur-lg">
      {props.info}
    </div>
  );
};

export default Info;
