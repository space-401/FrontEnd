import { P } from '@components/Create/SearchMapModal/style';

type PaginationType = {
  total: number;
  page: number;
  item_length: number;
  setPage: (number: number) => void;
};

const Pagination = (props: PaginationType) => {
  const { setPage, page, total, item_length } = props;
  const Buttons = new Array(Math.ceil(total / item_length))
    .fill('')
    .map((_, i) => i + 1);

  const PAGE_MAX_LENGTH = 8;

  const ShowPageNumber = Math.ceil(page / PAGE_MAX_LENGTH);
  const ShowButtons = Buttons.filter(
    (i) =>
      (ShowPageNumber - 1) * PAGE_MAX_LENGTH + 1 <= i &&
      ShowPageNumber * PAGE_MAX_LENGTH + 1 > i
  );
  const TopPage = Buttons.length;

  if (page > TopPage) {
    return;
  }

  if (Buttons.length === 1) {
    return null;
  }

  const ChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <P.PaginationBox>
      <P.Button
        width={50}
        isHidden={page === 1}
        disabled={page === 1}
        onClick={() => ChangePage(page - 1)}
      >
        Prev
      </P.Button>
      {ShowButtons.map((number) => (
        <P.Button
          key={number}
          onClick={() => ChangePage(number)}
          select={page === number}
          disabled={page === number}
        >
          {number}
          <P.Select />
        </P.Button>
      ))}
      <P.Button
        width={50}
        isHidden={page === TopPage}
        disabled={page === TopPage}
        onClick={() => ChangePage(page + 1)}
      >
        Next
      </P.Button>
    </P.PaginationBox>
  );
};

export default Pagination;
