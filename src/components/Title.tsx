type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="text-6x1 flex w-full items-center justify-center bg-black text-center text-white uppercase">
      {text}
    </div>
  );
};

export default Title;
