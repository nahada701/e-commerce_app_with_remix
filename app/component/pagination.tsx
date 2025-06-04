import React from "react";

interface PaginationProps {
  limit: number;
  offset: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  primaryColor?: string; 
  textColor?: string;
  showFirstLast?: boolean;
  totalToShow?:number
}

export default function Pagination({
  limit,
  offset,
  totalItems,
  onPageChange,
  primaryColor = "bg-dark_purple",
  textColor = "text-white",
  totalToShow =5
}: PaginationProps) {
  const lastPage = Math.ceil(totalItems / limit);
  const currentPage = offset;

  const pageButtonClass = (isActive: boolean) =>
    `border rounded  w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] ${isActive ? `${primaryColor} ${textColor}` : "border-indigo-300"}`;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < lastPage) onPageChange(currentPage + 1);
  };


  const getPageRange = () => {
    const half = Math.floor(totalToShow / 2);
    let start = Math.max(1, currentPage - half);
    let end = start + totalToShow - 1;

    if (end > lastPage) {
      end = lastPage;
      start = Math.max(1, end - totalToShow + 1);
    }
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };
  return (
    <div className="flex justify-center mt-4 mb-5 ">
      <div className="flex flex-row gap-2">

          <button
            className={`border rounded w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] text-white  ${currentPage==1? "bg-indigo-100 ":"bg-indigo-300  "}`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            «
          </button>
        

        {getPageRange().map((num) => (
          <button
            key={num}
            className={pageButtonClass(currentPage === num )}
            onClick={() => onPageChange(num )}
          >
            {num }
          </button>
        ))}

 
          <button
            className={`border rounded w-[25px] h-[25px] text-[12px] sm:w-[40px] sm:h-[40px] text-white  ${currentPage==lastPage? "bg-indigo-100 ":"bg-indigo-300  "}`}
            onClick={handleNext}
            disabled={currentPage === lastPage}
          >
            »
          </button>
   
      </div>
    </div>
  );
}
