const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded border ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;