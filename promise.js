const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  new Promise((resolve, reject) => {
    if (emosi === null) {
      return reject("data kosong");
    } else {
      return resolve(emosi);
    }
  });

  const main = async () => {
    try {
      let theater1 = await promiseTheaterIXX();
      let theater2 = await promiseTheaterVGC();
      let hasilAkhir = [];
      theater1.forEach((element) => {
        if (element.hasil === emosi) {
          hasilAkhir.push(element.namaFilm);
        }
      });
      theater2.forEach((element) => {
        if (element.hasil === emosi) {
          hasilAkhir.push(element.namaFilm);
        }
      });
      return hasilAkhir.length;
    } catch (err) {
      console.log("error");
    }
  };

  return main();
};

module.exports = {
  promiseOutput,
};
