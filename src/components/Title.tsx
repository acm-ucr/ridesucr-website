type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="text-7xl flex items-center justify-center bg-black text-center text-white uppercase py-10">
      {text}
    </div>
  );
}

export default Title;