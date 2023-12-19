export const getStores = async () => {
  const response = await fetch("http://52.79.169.113:8080/restaurants");
  const data = await response.json();
  return data.result;
};
