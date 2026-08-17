import { useState } from "react";

const MIN_PRICE = 1;
const MAX_PRICE = 9999;

function SideBar() {
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const minPercent = ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const handleMinChange = (value: number) => {
    setMinPrice(Math.min(value, maxPrice - 1));
  };

  const handleMaxChange = (value: number) => {
    setMaxPrice(Math.max(value, minPrice + 1));
  };

  return (
    <nav className="sticky top-16 self-start flex h-[calc(100dvh-4rem)] w-fit flex-col items-center bg-gray-300 p-3">
      <div className="w-52">
        <p className="mb-4 text-sm font-medium">
          Price range: {minPrice}-{maxPrice}
        </p>

        <div className="relative h-10 w-full">
          <div className="pointer-events-none absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-400" />
          <div
            className="pointer-events-none absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-blue-600"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={minPrice}
            onChange={(event) => handleMinChange(Number(event.target.value))}
            className="absolute inset-x-0 top-1/2 z-10 h-1 w-full -translate-y-1/2 appearance-none bg-transparent accent-blue-600"
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={maxPrice}
            onChange={(event) => handleMaxChange(Number(event.target.value))}
            className="absolute inset-x-0 top-1/2 z-20 h-1 w-full -translate-y-1/2 appearance-none bg-transparent accent-blue-600"
          />
        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-700">
          <span>{MIN_PRICE}</span>
          <span>{MAX_PRICE}</span>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
