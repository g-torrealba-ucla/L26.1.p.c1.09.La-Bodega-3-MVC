/**
 * LA BODEGA
 * En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 * Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 * Ej. Costos varios artículos: 10, 20, 14, 6 y 4
 * La salida requerida presenta el siguiente formato:
 * La ganancia será de Bs.27
 */

import Cl_mBodega from "../models/Cl_mBodega.js";
import { I_vBodega } from "../interfaces/I_vBodega.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cBodega {
  private mBodega: Cl_mBodega = new Cl_mBodega();
  private vBodega: I_vBodega;
  private cArticulo: Cl_cArticulo;

  // Recibe la vista de la bodega y el controlador del artículo ya armado
  constructor(vistaBodega: I_vBodega, controladorArticulo: Cl_cArticulo) {
    this.vBodega = vistaBodega;
    this.cArticulo = controladorArticulo;

    this.vBodega.onNuevoArticulo(() => this.procesar1Articulo());
    this.vBodega.mostrar(); // Aseguramos que la vista activa se muestre
  }

  private procesar1Articulo() {
    this.cArticulo.solicitarArticulo((articulo) => {
      if (articulo !== null) {
        this.mBodega.procesarArticulo(articulo);
        this.vBodega.reportar(this.mBodega.totalGanancia());
      }
    });
  }
}