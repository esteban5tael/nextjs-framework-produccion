export const generatePaginationNumbers = (
    currentPage: number,
    totalPages: number
) => {
    /* 
        si el numero total de paginas es 7 o menos, mostrar todas las paginas sin puntos suspensivos
    */
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    /* 
        si la pagina actual esta entre las primer 3 paginas mostrar las primeras 3 paginas, puntos suspensivos y las ultimas dos
    */
    if (currentPage <= 3) {
        return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
    }

    /* 
        si la pagina actual esta entre las utlimas 3 paginas mostrar las primeras 2 paginas, puntos suspensivos y las ultimas tres
    */
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    /* 
        si la pagina actual esta en otro lugar medio, mostrar la primera pagina, puntos suspensivos, la pagina actual con una pagina antes y despues, puntos suspensivos y la ultima pagina
    */

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};
