type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex items-center justify-center py-10 text-center text-7xl sm:py-8 md:py-10">
      <div className="text-3x1 sm:text-5x1 md:text-6x1 text-white uppercase lg:text-7xl">
        {text}
      </div>
    </div>
  );
};

export default Title;
