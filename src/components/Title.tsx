type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="text-ridesucr-white flex justify-center py-10 text-center text-5xl md:text-7xl">
      {text}
    </div>
  );
};

export default Title;
