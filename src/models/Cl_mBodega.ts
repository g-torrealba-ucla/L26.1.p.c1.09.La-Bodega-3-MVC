import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mBodega {
  private acGanancia: number;

  constructor() {
    this.acGanancia = 0;
  }

  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
  }

  totalGanancia(): number {
    return this.acGanancia;
  }
}
