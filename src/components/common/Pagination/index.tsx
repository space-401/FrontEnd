import S from '@components/common/Pagination/style';
import { PaginationType } from '@type/main.type';

const Pagination = (props: PaginationType) => {
  const { page, movePage, total, itemLength } = props;
  const Buttons = new Array(Math.ceil(total / itemLength))
    .fill('')
    .map((_, i) => i + 1);
  const PAGE_MAX_LENGTH = 5;

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
    movePage(newPage);
  };

  return (
    <S.PaginationBox>
      <S.Button
        width={50}
        isHidden={page === 1}
        disabled={page === 1}
        onClick={() => ChangePage(page - 1)}
      >
        Prev
      </S.Button>
      {ShowButtons.map((number) => (
        <S.Button
          key={number}
          onClick={() => ChangePage(number)}
          select={page === number}
          disabled={page === number}
        >
          {number}
        </S.Button>
      ))}
      <S.Button
        width={50}
        isHidden={page === TopPage}
        disabled={page === TopPage}
        onClick={() => ChangePage(page + 1)}
      >
        Next
      </S.Button>
    </S.PaginationBox>
  );
};

export default Pagination;
