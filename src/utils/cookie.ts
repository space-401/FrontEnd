export const setCookie = (
  key: string,
  value: string,
  expiredminutes: number
) => {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getTime() + expiredminutes * 1000 * 60);
  document.cookie = `${key}=${encodeURIComponent(
    value
  )}; path=/; expires=${todayDate.toUTCString()};`;
};

export const getCookie = (key: string) => {
  const regex = new RegExp(`${key}=([^;]*)`);
  const match = regex.exec(document.cookie);
  return match ? decodeURIComponent(match[1]) : null;
};

export const hasCookie = (key: string) => {
  return Boolean(getCookie(key));
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
