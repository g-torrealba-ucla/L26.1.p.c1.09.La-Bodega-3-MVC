export default class Cl_vBodega {
  lblGanancia: HTMLInputElement;
  btNuevoArticulo: HTMLButtonElement;
  constructor() {
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
}
