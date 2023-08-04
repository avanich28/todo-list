// FIXME automatically update date
export const getNewDate = function (strDate) {};

export const filterDate = function (strDate) {
  return strDate.toISOString().slice(0, 10);
};

export const getNextDay = function (i = 1) {
  const curDate = new Date();
  return new Date(curDate.setDate(curDate.getDate() + i));
};
