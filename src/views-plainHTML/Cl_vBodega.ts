export default class Cl_vBodega {
  lblGanancia: HTMLInputElement;
  btNuevoArticulo: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoArticulo = document.getElementById(
      "body_btNuevoArticulo",
    ) as HTMLButtonElement;
    this.lblGanancia = document.getElementById(
      "body_lblGanancia",
    ) as HTMLInputElement;
  }
  reportar({ ganancia }: { ganancia: number }): void {
    this.lblGanancia!.innerHTML = `${ganancia}`;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
