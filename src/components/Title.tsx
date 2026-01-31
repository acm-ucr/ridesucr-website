type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex w-full items-center justify-center py-20">
      <h1 className="text-6x1 md:text-8x1 text-center leading-none font-extrabold tracking-widest text-white uppercase">
        {text}
      </h1>
    </div>

    //return <div>Title</div>;
  );
};

export default Title;
