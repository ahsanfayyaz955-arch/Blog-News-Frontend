function Pagination({

    currentPage,
    totalPages,
    onPageChange

}) {

    if (totalPages <= 1) {

        return null;

    }

    return (

        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mt-5">

            <button
                className="btn btn-outline-primary"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >

                ← Previous

            </button>

            {

                [...Array(totalPages)].map((_, index) => {

                    const page = index + 1;

                    return (

                        <button
                            key={page}
                            className={`btn ${
                                currentPage === page
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                            }`}
                            onClick={() => onPageChange(page)}
                        >

                            {page}

                        </button>

                    );

                })

            }

            <button
                className="btn btn-outline-primary"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >

                Next →

            </button>

        </div>

    );

}

export default Pagination;