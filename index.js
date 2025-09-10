import { getData } from "./lib/api.js";
import { dataProses } from "./lib/data-proses.js";

const url = "https://git.fahrul.id/koda/data/raw/branch/main/talents.json";

const main = async () => {
  try {
    const data = await getData(url);
    const result = dataProses(data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

main();
