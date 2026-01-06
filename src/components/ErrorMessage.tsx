
interface ErrorMessageProps {
    text: string
}

const ErrorMessage = ({text}: ErrorMessageProps) => {
  return <div>{text}</div>;
};

export default ErrorMessage;
