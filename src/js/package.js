// create pagination
// using a module
// if need to use functions more that ones, return the functions in an object
// otherwise they are not accessible
(function MakePagination() {
  const paginationCont = document.querySelector(".package-pagination");
  const pageItems = Array.from(
    paginationCont.querySelectorAll(".pagination-item"),
  );
  const arrows = Array.from(paginationCont.querySelectorAll(".page-arrow"));
  const giveCurrentPage = (e) => {
    // find current-page class
    const currentPage = paginationCont.querySelector(".current-page");
    const clickedPage = e.target;
    currentPage.classList.remove("current-page");
    clickedPage.classList.add("current-page");
    console.log(currentPage);
  };
  const movePageByArrow = (e) => {
    const currentPage = paginationCont.querySelector(".current-page");
    const clickedArrow = e.target.closest("a");
    // find index
    let arrowIndex = arrows.indexOf(clickedArrow);
    let currentPageIndex = pageItems.indexOf(currentPage);
    pageItems[currentPageIndex].classList.remove("current-page");
    // arrow index 0 = left arrow index 1 = right
    arrowIndex === 0
      ? (currentPageIndex = currentPageIndex - 1)
      : (currentPageIndex = currentPageIndex + 1);
    pageItems[currentPageIndex].classList.add("current-page");
  };
  pageItems.forEach((item) => item.addEventListener("click", giveCurrentPage));
  arrows.forEach((arrow) => arrow.addEventListener("click", movePageByArrow));
})();
