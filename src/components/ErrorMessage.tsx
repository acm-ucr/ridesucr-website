import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";
import Link from "next/link";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="bg-ridesucr-black flex h-screen items-start">
      <div className="relative flex flex-col overflow-hidden px-[10vw] text-center lg:flex-row lg:px-[20vw]">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="text-ridesucr-white text-center text-[15rem] lg:text-[25rem]/none">
            {text}
          </p>

          <Image
            src={ErrorImage}
            alt="Check Engine Light: Error Message Picture"
            className="pl-9 -my-44 -z-40 h-auto w-full blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)] lg:mt-20 lg:h-[450px] lg:w-[450px]"
          />
        </div>
        <div className="relative z-20 text-4xl lg:text-6xl lg:text-left lg:pb-20">
          <p className="text-ridesucr-gray pt-12 pb-2 ">
            OFF THE ROAD.
          </p>
          <Link
            href="/"
            className="text-ridesucr-white underline hover:text-gray-400"
          >
            RETURN HOME?
          </Link>
        </div>
        <Image
          src={ErrorImage}
          alt="Check Engine Light: Error Message Picture"
          className="absolute top-38 right-3 left-3 h-[53vh] w-full blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)] lg:static lg:top-auto lg:h-auto lg:w-auto"
        />
      </div>
    </div>
  );
};

export default ErrorMessage;
