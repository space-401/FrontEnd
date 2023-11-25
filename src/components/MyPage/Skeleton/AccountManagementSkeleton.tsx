import { A } from '../style';
import { KSkeleton } from '@/components/common';

export const AccountManagementSkeleton = () => {
  return (
    <>
      <A.Title>
        <KSkeleton variant={'rounded'} width={150} height={35} />
      </A.Title>
      <A.Description margin_top={16}>
        <KSkeleton variant={'rounded'} width={230} height={25} />
      </A.Description>
      <A.Bar margin_top={16} />
      <A.Description margin_top={40}>
        <KSkeleton variant={'rounded'} width={50} height={20} />
      </A.Description>
      <A.NameBox margin_top={16}>
        <A.WhiteSpan>
          <KSkeleton variant={'rounded'} width={80} height={24} />
        </A.WhiteSpan>
      </A.NameBox>
      <A.Description margin_top={32}>
        <KSkeleton variant={'rounded'} width={52} height={19} />
      </A.Description>
      <A.IConBox margin_top={16}>
        <KSkeleton variant={'rounded'} width={24} height={24} />
        <A.WhiteSpan>
          <KSkeleton variant={'rounded'} width={130} height={24} />
        </A.WhiteSpan>
      </A.IConBox>
      <A.Bar margin_top={40} />
      <A.ButtonGroup>
        <KSkeleton variant={'rounded'} width={160} height={48} />
        <KSkeleton variant={'rounded'} width={160} height={48} />
      </A.ButtonGroup>
    </>
  );
};
