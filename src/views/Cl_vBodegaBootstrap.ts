import { I_vBodega } from "../interfaces/I_vBodega.js";

export default class Cl_vBodegaBootstrap implements I_vBodega {
  private lblGanancia: HTMLElement;
  private btNuevoArticulo: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLElement;
  }

  onNuevoArticulo(callback: () => void): void {
    this.btNuevoArticulo.onclick = callback;
  }

  reportar(ganancia: number): void {
    this.lblGanancia.innerHTML = ganancia.toString();
  }

  mostrar(): void {
    this.vista.hidden = false;
  }

  ocultar(): void {
    this.vista.hidden = true;
  }
}