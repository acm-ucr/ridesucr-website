type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex w-full items-center justify-center bg-black text-6x1 text-center text-white uppercase">

        {text}
    </div>

 
  );
};

export default Title;
