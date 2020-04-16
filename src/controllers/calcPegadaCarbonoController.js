const calcPegadaCarbono = require("../utils/calcPegadaCarbono");

module.exports = {
  async create(req, resp) {
    result = calcPegadaCarbono(
      req.body.energiaKwhMes,
      req.body.gasCozinhaKgMes,
      req.body.gasNaturalM3Mes,
      req.body.veicPGasolinaKmMes,
      req.body.veicMGasolinaKmMes,
      req.body.veicGGasolinaKmMes,
      req.body.motoGasolinaKmMes,
      req.body.veicPEtanolKmMes,
      req.body.veicMEtanolKmMes,
      req.body.veicGEtanolKmMes,
      req.body.motoEtanolKmMes,
      req.body.carroDieselKmMes,
      req.body.onibusDieselUrbanoKmMes,
      req.body.onibusDieselRodoviaKmMes,
      req.body.carroGnvKmMes,
      req.body.viagemNacionalKmMes,
      req.body.viagemInternacionalKmMes,
      req.body.aterroResiduosKgDia
    );
    resp.send(result);
  }
};
