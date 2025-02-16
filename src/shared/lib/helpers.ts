export const formatDate = (str: string): string => {
  const date = new Date(str);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const isBoolean = (param: boolean): string => {
  return param ? "Да" : "Нет";
};

export const formatNumber = (input: string | number): string => {
  let str = String(input);
  str = str.replace(/\s/g, "");
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
