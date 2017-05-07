export const getTimeFromDate = (time) => {
  const date = new Date(time);
  const minutes = date.getMinutes();
  return `${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
};

export const getDateFromDate = (time) => {
  const date = new Date(time);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const getAge = (born) => {
  const bornDate = new Date(born);
  const now = new Date();
  const birthday = new Date(now.getFullYear(), bornDate.getMonth(), bornDate.getDate());
  if (now >= birthday) {
    return now.getFullYear() - bornDate.getFullYear();
  }

  return now.getFullYear() - bornDate.getFullYear() - 1;
};

export const DatesDiffInMins = (date) => {
  const nowDate = new Date();
  const duelDate = new Date(date);
  return (duelDate - nowDate) / 60000;
};
