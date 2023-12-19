export const getTime = async( storeId ) => {
    const response = await fetch("http://192.168.107.231:8080/restaurants/${storeId}/reservation?timestamp=2023-12-19")
    const data = await response.json();
    return data;
}

export const updateBooking = async (storeId, date, countPeople) => {

    // const totalPrice = menus.reduce((acc, menu) => acc + menu.price * menu.cnt, 0);

    try {
        const response = await fetch("http://192.168.107.231:8080/restaurants/${storeId}/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date,
                time: date,
                countPeople,
            }),
        });

    if (!response.ok) {
        // Handle error if the response status is not OK (e.g., 4xx or 5xx)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      // Handle the data as needed
  
      return data;
    } catch (error) {
      console.error("Error during updateBooking:", error);
      // Handle errors here, e.g., show an error message to the user
    }
}