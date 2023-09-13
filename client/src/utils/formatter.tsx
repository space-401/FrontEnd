import { UserType } from '@type/user.type';

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
    return _.map((user) => user.user_name).join(', ');
  }

  let userList = '';
  _.forEach((v, i) => {
    if (i === 0) {
      userList += v.user_name + ' with ';
    } else if (i === 1) {
      userList += v.user_name;
    } else {
      userList += ', ' + v.user_name;
    }
  });
  return userList;
};
