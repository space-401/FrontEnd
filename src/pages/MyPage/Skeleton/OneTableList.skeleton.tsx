import S from '@modal/Detail/style';
import KSkeleton from '@components/common/Skeleton';

const OneTableListSkeleton = ({ iconBox }: { iconBox: boolean }) => {
  console.log(iconBox);
  return (
    <tr>
      <td>
        <KSkeleton
          variant={'rounded'}
          width={Math.random() * 100 + 200}
          height={16}
        />
      </td>
      <td>
        <KSkeleton variant={'rounded'} width={100} height={16} />
      </td>
      <td>
        <KSkeleton
          variant={'rounded'}
          width={Math.random() * 5 + 40}
          height={16}
        />
      </td>
      {iconBox ? (
        <td>
          <S.CommentDeleteIconBox>
            <KSkeleton variant={'rounded'} width={16} height={16} />
          </S.CommentDeleteIconBox>
        </td>
      ) : (
        ''
      )}
    </tr>
  );
};

export default OneTableListSkeleton;
