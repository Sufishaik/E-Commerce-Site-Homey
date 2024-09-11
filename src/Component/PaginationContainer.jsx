import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
export const PaginationContainer = () => {
    const { meta } = useLoaderData();
    const { pageCount, page } = meta.pagination;
    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });
    console.log("pages ", pages)
    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };
    if (pageCount < 2) return null;

    return (
        <>
            <div className="mt-16 flex justify-start items-center m-auto">
                <div className="join">
                    <button
                        className="btn btn-xs sm:btn-md join-item"
                        onClick={() => {
                            let prevPage = page - 1;
                            if (prevPage < 1) prevPage = pageCount;
                            handlePageChange(prevPage);
                        }}
                    >
                        Prev
                    </button>


                    {page > 3 && (
                        <>
                            <button
                                onClick={() => handlePageChange(1)}
                                className={`btn btn-xs sm:btn-md border-none join-item ${1 === page ? "bg-base-300 border-base-300" : ""}`}
                            >
                                1
                            </button>
                            {page > 4 && <span className="btn btn-xs sm:btn-md join-item">...</span>}
                        </>
                    )}


                    {pages
                        .filter(
                            (pageNumber) =>
                                pageNumber >= page - 2 && pageNumber <= page + 2
                        )
                        .map((pageNumber) => {
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? "bg-base-300 border-base-300" : ""
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}


                    {page < pageCount - 2 && (
                        <>
                            {page < pageCount - 3 && <span className="btn btn-xs sm:btn-md join-item">...</span>}
                            <button
                                onClick={() => handlePageChange(pageCount)}
                                className={`btn btn-xs sm:btn-md border-none join-item ${pageCount === page ? "bg-base-300 border-base-300" : ""
                                    }`}
                            >
                                {pageCount}
                            </button>
                        </>
                    )}

                    <button
                        className="btn btn-xs sm:btn-md join-item"
                        onClick={() => {
                            let nextPage = page + 1;
                            if (nextPage > pageCount) nextPage = 1;
                            handlePageChange(nextPage);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}

