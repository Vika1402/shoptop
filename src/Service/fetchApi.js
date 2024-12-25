async function fetchApi() {
  try {
    const apiResponce = await fetch("https://fakestoreapi.com/products");
    const Responnse = await apiResponce.json();
    return Responnse;
  } catch (error) {
    return error;
  }
}

export default fetchApi;
