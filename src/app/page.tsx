export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-2/3 flex-col gap-6 rounded-lg p-6">
        {/* Inner boxes */}
        <div
          className="box1 flex items-center justify-center rounded-md p-6 text-2xl"
          style={{ backgroundColor: "var(--color-ridesucr-lightred)" }}
        >
          box 1
        </div>

        <div
          className="box2 flex items-center justify-center rounded-full p-6 text-2xl"
          style={{ backgroundColor: "var(--color-ridesucr-orange)" }}
        >
          box 2
        </div>

        <div
          className="box3 flex items-center justify-center rounded-md p-6 text-2xl"
          style={{ backgroundColor: "var(--color-ridesucr-mintgreen)" }}
        >
          box 3
        </div>

        <div
          className="box4 flex items-center justify-center rounded-full p-6 text-2xl text-white"
          style={{ backgroundColor: "var(--color-ridesucr-blue)" }}
        >
          box 4
        </div>
      </div>
    </div>
  );
}
