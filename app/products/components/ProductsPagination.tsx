"use client";

import { useState } from "react";

export function ProductsPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // This would come from your API/data source

  return (
    <nav className='flex items-center space-x-2'>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className='px-3 py-2 border border-gray-200 text-accent hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-3 py-2 ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "border border-gray-200 text-accent hover:border-primary hover:text-primary"
          } transition-colors`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className='px-3 py-2 border border-gray-200 text-accent hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Next
      </button>
    </nav>
  );
}
