import React, { useEffect } from 'react';
import _ from 'lodash';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagenator = ({ paginator }) => {
  console.log(paginator);
  const { totalCount, totalPages } = paginator;
  const pages = _.range(0, totalPages);

  return (
    <div className="pt-3 items-center justify-between  border-t border-gray-200">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 mb-3 mt-3 sm:mb-0 sm:mt-0">전체 회원수 : {totalCount}명</p>
        </div>
        <div>
          <nav id="paginator" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {pages.map((page, idx) => {
              const addPageTag = [];

              if (idx === 0) {
                if (paginator.hasPrePage) {
                  addPageTag.push(
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-solid border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                }
              }
              if (idx + 1 === paginator.page) {
                addPageTag.push(
                  <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
                    {idx + 1}
                  </a>
                );
              } else {
                addPageTag.push(
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
                    {idx + 1}
                  </a>
                );
              }
              if (idx + 1 === totalPages) {
                if (paginator.hasNextPage) {
                  addPageTag.push(
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-solid border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                }
              }

              return addPageTag;
            })}

            {/*
            <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
              1
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
              2
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border border-solid text-sm font-medium">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-solid border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border border-solid text-sm font-medium">
              8
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
              9
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium">
              10
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-solid border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagenator;
