const Info = (props: { info: string }) => {
  return (
    <div className="text-ridesucr-white flex w-full gap-4 rounded-md bg-white/30 p-8 text-center text-2xl/8 backdrop-blur-lg">
      {props.info}
    </div>
  );
};

export default Info;
