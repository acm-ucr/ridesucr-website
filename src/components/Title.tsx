type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex items-center justify-center bg-black py-10 text-center text-7xl text-white uppercase">
      {text}
    </div>
  );
};

export default Title;
