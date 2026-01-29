import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="bg-ridesucr-black flex h-screen w-screen items-center">
      <div className="flex w-full flex-col items-center px-40">
        <div className="flex w-full items-center justify-between">
          <div className="relative z-10 pt-16 pb-10">
            <div className="text-ridesucr-white text-[20rem] leading-none">
              {text}
            </div>
            <p className="text-ridesucr-gray pb-2 text-5xl">OFF THE ROAD.</p>
            <p className="text-ridesucr-white text-5xl">RETURN HOME?</p>
          </div>
          <div className="mt-20 pt-16">
            <Image
              src={ErrorImage}
              alt="Check Engine Light: Error Message Picture"
              className="h-96 max-w-80 blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)]"
            ></Image>
          </div>
        </div>
        <div className="via-ridesucr-white mt-2 h-px w-2/4 bg-gradient-to-r from-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default ErrorMessage;
