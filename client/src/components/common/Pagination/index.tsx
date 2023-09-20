import { useState } from 'react';
import S from '@components/common/Pagination/style';
import { useSearchParams } from 'react-router-dom';

type PaginationType = {
  total: number;
  page: number;
  item_length: number;
};

const Pagination = ({ total, page, item_length }: PaginationType) => {
  const [pageState, setPageState] = useState(page);
  const [_, setSearchParam] = useSearchParams();
  const Buttons = new Array(Math.ceil(total / item_length))
    .fill('')
    .map((_, i) => i + 1);

  const PAGE_MAX_LENGTH = 8;

  const ShowPageNumber = Math.ceil(pageState / PAGE_MAX_LENGTH);
  const ShowButtons = Buttons.filter(
    (i) =>
      (ShowPageNumber - 1) * PAGE_MAX_LENGTH + 1 <= i &&
      ShowPageNumber * PAGE_MAX_LENGTH + 1 > i
  );
  const TopPage = Buttons.length;

  if (pageState > TopPage) {
    return;
  }

  if (Buttons.length === 1) {
    return null;
  }

  const ChangePage = (newPage: number) => {
    setPageState(newPage);
    setSearchParam({ page: String(newPage) });
  };

  return (
    <S.PaginationBox>
      <S.Button
        width={50}
        isHidden={pageState === 1}
        disabled={pageState === 1}
        onClick={() => ChangePage(pageState - 1)}
      >
        Prev
      </S.Button>
      {ShowButtons.map((number) => (
        <S.Button
          key={number}
          onClick={() => ChangePage(number)}
          select={pageState === number}
          disabled={pageState === number}
        >
          {number}
          <S.Select />
        </S.Button>
      ))}
      <S.Button
        width={50}
        isHidden={pageState === TopPage}
        disabled={pageState === TopPage}
        onClick={() => ChangePage(pageState + 1)}
      >
        Next
      </S.Button>
    </S.PaginationBox>
  );
};

export default Pagination;
