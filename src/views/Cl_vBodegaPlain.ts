import { I_vBodega } from "../interfaces/I_vBodega.js";

export default class Cl_vBodegaPlain implements I_vBodega {
  private lblGanancia: HTMLElement;
  private btNuevoArticulo: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    // Usamos el ID del section contenedor que tenías en tu index-plainHTML
    this.vista = document.getElementById("body") as HTMLElement;
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
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}