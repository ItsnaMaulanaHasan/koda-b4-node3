export const getData = async (url) => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log("Gagal mendapatkan data");
    throw error;
  }
};
