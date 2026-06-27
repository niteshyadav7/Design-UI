export default function DotGridIcon() {
  // 5x5 grid pattern — specific dots are set to pulse for visual interest
  const grid = [
    [false, false, true, false, false],
    [false, false, false, true, false],
    [true, true, true, true, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
  ];

  return (
    <div className="flex flex-col gap-px">
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-px">
          {row.map((isPulsing, colIdx) => (
            <span
              key={colIdx}
              className={`inline-block size-[3px] shrink-0 rounded-full ${
                isPulsing
                  ? "animate-pulse bg-white duration-200 ease-linear"
                  : "bg-white/25"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
