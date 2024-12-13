export const fetchMenu = async () => {
  // fetch ile db json dan veriler alındu
  const res = await fetch("../db.json");

  const data = await res.json();
  return data;
};
