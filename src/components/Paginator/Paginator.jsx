const PAGE_SIZES = [20, 50, 100];

const Paginator = ({ page, onPageChange, limit, onLimitChange, totalItems }) => {
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const getPageWindow = (windowSize = 5) => {
        let start = Math.max(1, page - Math.floor(windowSize / 2));
        let end = start + windowSize - 1;
        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - windowSize + 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const mobileWindow  = getPageWindow(3);
    const desktopWindow = getPageWindow(5);

    // const pageWindow = getPageWindow();

    const rangeStart = Math.min((page - 1) * limit + 1, totalItems);
    const rangeEnd   = Math.min(page * limit, totalItems);

    const btnBase     = 'flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded text-sm font-medium transition-colors';
    const btnActive   = 'bg-indigo-600 text-white';
    const btnInactive = 'bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer';
    const btnDisabled = 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed';

    return (
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-2 px-4 py-3 bg-white border-t border-gray-200">

            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Rows per page:</span>
                <select
                    value={limit}
                    onChange={(e) => { onLimitChange(Number(e.target.value)); onPageChange(1); }}
                    className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    {PAGE_SIZES.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                <span className="text-gray-400 text-xs">{`${rangeStart}–${rangeEnd} of ${totalItems}`}</span>
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={page === 1}
                    className={`${btnBase} ${page === 1 ? btnDisabled : btnInactive}`}
                    aria-label="First page"
                >«</button>

                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    className={`${btnBase} ${page === 1 ? btnDisabled : btnInactive}`}
                    aria-label="Previous page"
                >‹</button>

                {mobileWindow.map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        disabled={p === page}
                        className={`${btnBase} ${p === page ? btnActive : btnInactive} sm:hidden`}
                        aria-label={`Page ${p}`}
                        aria-current={p === page ? 'page' : undefined}
                    >{p}</button>
                ))}
                {desktopWindow.map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        disabled={p === page}
                        className={`${btnBase} ${p === page ? btnActive : btnInactive} hidden sm:flex`}
                        aria-label={`Page ${p}`}
                        aria-current={p === page ? 'page' : undefined}
                    >{p}</button>
                ))}

                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages}
                    className={`${btnBase} ${page === totalPages ? btnDisabled : btnInactive}`}
                    aria-label="Next page"
                >›</button>

                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={page === totalPages}
                    className={`${btnBase} ${page === totalPages ? btnDisabled : btnInactive}`}
                    aria-label="Last page"
                >»</button>
            </div>
        </div>
    );
};

export default Paginator;
