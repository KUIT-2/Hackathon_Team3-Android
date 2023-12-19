export const getStores = async () => {
    const response = await fetch("http://192.168.107.231:8080/restaurants");
    const data = await response.json();
    return data.result;
}