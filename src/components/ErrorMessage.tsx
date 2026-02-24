import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";
import Link from "next/link";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center lg:px-[15vw]">
        <div className="lg:flex lg:justify-center">
          <p className="text-ridesucr-white text-[15rem] lg:text-[25rem]/none">
            {text}
          </p>
          <Image
            src={ErrorImage}
            alt="Check Engine Light: Error Message Picture"
            className="-z-40 -my-44 h-auto w-full pl-9 blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)] lg:mt-20 lg:h-[450px] lg:w-[450px]"
          />
        </div>
        <div className="relative z-20 text-4xl lg:pb-20 lg:text-left lg:text-6xl">
          <p className="text-ridesucr-gray pt-12 pb-2">OFF THE ROAD.</p>
          <Link
            href="/"
            className="text-ridesucr-white underline hover:text-gray-400"
          >
            RETURN HOME?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
