"use client";
import React, { useState } from "react";
import Button from "./button";

interface Props {
  filterData: string[];
  onFilterChange?: (selectedFilter: number) => void;
  initialFilter: number;
}

const Filter = ({ filterData, onFilterChange, initialFilter }: Props) => {
  const [activeFilter, setActiveFilter] = useState<number>(initialFilter);

  const handleFilterClick = (filter: number) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="border rounded-full border-primary-blue w-fit flex gap-2 p-2">
      {filterData.map((item, index) => (
        <Button
          key={index}
          buttonText={item}
          onClick={() => handleFilterClick(index)}
          className={`w-fit px-6 py-4 rounded-full transition-all duration-300 ease-in-out ${
            activeFilter === index
              ? "bg-primary-blue text-primary-white font-brineue-bold"
              : "bg-transparent text-primary-black hover:bg-primary-black/10 hover:text-primary-black"
          }`}
        />
      ))}
    </div>
  );
};

export default Filter;
