import { UserType } from '@type/post.type';

export const getFormatDate = (_: string) => {
  const date = new Date(_);
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();
  return `${year}.${month < 10 ? '0' + month : month}.${
    day < 10 ? '0' + day : day
  }`;
};

export const getFormatUser = (_: UserType[]) => {
  if (_.length < 3) {
    return _.map((user) => user.userName).join(', ');
  }

  let userList = '';
  _.forEach((v, i) => {
    if (i === 0) {
      userList += v.userName + ' with ';
    } else if (i === 1) {
      userList += v.userName;
    } else {
      userList += ', ' + v.userName;
    }
  });
  return userList;
};
