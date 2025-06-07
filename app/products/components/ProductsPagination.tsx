"use client";

import { useState } from "react";
import { useProductsPageState } from "../hooks/useProductsPageState";
import { useProductsActions } from "../hooks/useProductsActions";

export function ProductsPagination() {
  const { meta, pagination } = useProductsPageState();
  const { setPagination } = useProductsActions();
  const { total, limit } = meta;
  const totalPages = Math.ceil(total / limit);
  const currentPage = pagination.page;

  const handlePageChange = (page: number) => {
    setPagination({ page, limit });
  };

  const handlePreviousPage = () => {
    if (pagination.page > 1) {
      setPagination({ page: currentPage - 1, limit });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPagination({ page: currentPage + 1, limit });
    }
  };

  return (
    <nav className='flex items-center space-x-2'>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className='px-3 py-2 border border-gray-200 text-accent hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
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
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className='px-3 py-2 border border-gray-200 text-accent hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Next
      </button>
    </nav>
  );
}
