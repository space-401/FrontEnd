import { SuggestionDataItem } from 'react-mentions';
import { UserType } from '@type/post.type';
import { ReactNode } from 'react';

export type OneMentionType = {
  suggestion: SuggestionDataItem;
  userList: UserType[];
  highlightedDisplay: ReactNode;
};
