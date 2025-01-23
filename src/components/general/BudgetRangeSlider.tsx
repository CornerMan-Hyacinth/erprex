import { useCallback, useEffect, useRef, useState } from "react";

interface BudgetRangeSliderProps {
  min: number;
  max: number;
  onChange?: (values: [number, number]) => void;
  step?: number;
  isLg?: boolean;
}

function BudgetRangeSlider({
  min,
  max,
  onChange,
  step = 10,
  isLg,
}: BudgetRangeSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);

  const [values, setValues] = useState<[number, number]>([min, max]);

  // Update values when props change
  useEffect(() => {
    setValues([min, max]);
  }, [min, max]);

  const [minValue, maxValue] = values;

  // Calculate percentage position for thumbs
  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const minThumbStyle = {
    left: `${getPercentage(minValue)}%`,
  };

  const maxThumbStyle = {
    left: `${getPercentage(maxValue)}%`,
  };

  const progressStyle = {
    left: `${getPercentage(minValue)}%`,
    width: `${getPercentage(maxValue) - getPercentage(minValue)}%`,
  };

  // Handle mouse/touch move
  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const slider = sliderRef.current;
      const rect = slider.getBoundingClientRect();
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;

      // Calculate new value based on position
      const percentage = Math.min(
        Math.max((clientX - rect.left) / rect.width, 0),
        1
      );
      const newValue =
        Math.round((percentage * (max - min) + min) / step) * step;

      setValues((prev) => {
        let newValues: [number, number];

        if (isDragging === "min") {
          newValues = [Math.min(newValue, maxValue - step), maxValue];
        } else {
          newValues = [minValue, Math.max(newValue, minValue + step)];
        }

        onChange?.(newValues);
        return newValues;
      });
    },
    [isDragging, min, max, step, minValue, maxValue, onChange]
  );

  // Handle mouse/touch up
  const handleEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(null);
    }
  }, [isDragging, values]);

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div className={`w-full pr-3 py-6`}>
      <div
        ref={sliderRef}
        className={`relative w-full h-2 bg-gray-200 rounded-full`}
      >
        {/* Progress Bar */}
        <div
          className="absolute h-full bg-my-blue rounded-full"
          style={progressStyle}
        />

        {/* Min Thumb */}
        <div
          className={`absolute w-5 h-5 bg-white border-2 border-my-blue rounded-full -mt-1.5 cursor-pointer`}
          style={minThumbStyle}
          onMouseDown={() => setIsDragging("min")}
          onTouchStart={() => setIsDragging("min")}
        />

        {/* Max Thumb */}
        <div
          className={`absolute w-5 h-5 bg-white border-2 border-my-blue rounded-full -mt-1.5 cursor-pointer`}
          style={maxThumbStyle}
          onMouseDown={() => setIsDragging("max")}
          onTouchStart={() => setIsDragging("max")}
        />
      </div>

      {/* Values display */}
      {/* {isLg ? (
          <div className="flex justify-between mt-4">
            <div className="text-black text-sm xl:text-base">
              ${minValue.toLocaleString()}
            </div>
            <div className="text-black text-sm xl:text-base">
              ${maxValue.toLocaleString()}
              {maxValue === 49999 && "+"}
            </div>
          </div>
        ) : (
          <div className="flex justify-between mt-4">
            <div className="px-7 py-2 min-w-28 text-black text-base border border-black border-opacity-50 rounded-lg">
              ${minValue.toLocaleString()}
            </div>
            <div className="px-7 py-2 min-w-28 text-black text-base border border-black border-opacity-50 rounded-lg">
              ${maxValue.toLocaleString()}
              {maxValue === 49999 && "+"}
            </div>
          </div>
        )} */}
    </div>
  );
}

export default BudgetRangeSlider;
