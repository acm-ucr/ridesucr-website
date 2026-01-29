const Moto = () => {
  const repeatingText = "Driven by passion • rides @ UCR • ";

  const repeatedText = repeatingText.repeat(200);

  return (
    <div className="bg-ridesucr-black relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background image*/}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cars/car1.webp')",
          width: "100%",
          height: "100%",
          maxWidth: "1511px",
          maxHeight: "1059px",
          filter: "blur(5px)",
          opacity: 0.2,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Repeating text*/}
      <div
        className="absolute inset-0 text-white/3"
        style={{
          fontSize: "clamp(16px, 2vw, 32px)",
          lineHeight: "1",
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
        }}
      >
        {repeatedText}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1512px] text-left">
        {/* Driven by passion */}
        <div
          className="text-ridesucr-white font-normal"
          style={{
            fontSize: "clamp(80px, 15vw, 250px)",
            lineHeight: "clamp(80px, 15vw, 250px)",
          }}
        >
          driven by <br />
          passion
        </div>

        {/* We are rides @ ucr */}
        <div
          className="text-ridesucr-gray mt-1 font-normal"
          style={{
            fontSize: "clamp(32px, 5vw, 75px)",
            lineHeight: "100%",
          }}
        >
          we are rides @ ucr.
        </div>
      </div>
    </div>
  );
};

export default Moto;
