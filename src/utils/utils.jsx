export const getPaginationData = (structure) => {
  const { total_records, records_per_page } = structure;
  const total_pages = Math.ceil(total_records / records_per_page);
  const pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(i);
  }
  return { total_pages, pages };
};
