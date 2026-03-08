/**
 * LA BODEGA
 * En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 * Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 * Ej. Costos varios artículos: 10, 20, 14, 6 y 4
 * La salida requerida presenta el siguiente formato:
 * La ganancia será de Bs.27
 */

import Cl_mArticulo from "../models/Cl_mArticulo.js";
import Cl_mBodega from "../models/Cl_mBodega.js";
import Cl_vBodega from "../views/Cl_vBodega.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cBodega {
  private mArticulo: Cl_mArticulo = new Cl_mArticulo();
  private mBodega: Cl_mBodega = new Cl_mBodega();
  private vBodega: Cl_vBodega = new Cl_vBodega();
  constructor() {
    this.vBodega.btNuevoArticulo.onclick = () => this.procesar1Articulo();
  }
  procesar1Articulo() {
    new Cl_cArticulo({
      callback: (articulo) => {
        if (articulo !== null) {
          this.mBodega.procesarArticulo(articulo);
          this.vBodega.reportar({ ganancia: this.mBodega.totalGanancia() });
        }
      },
    });
  }
}
