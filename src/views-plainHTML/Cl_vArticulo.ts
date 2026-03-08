export default class Cl_vArticulo {
  inCosto: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inCosto = document.getElementById(
      "articulo_inCosto",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "articulo_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "articulo_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }
  get costo(): number {
    return +this.inCosto.value;
  }
  set costo(costo: number) {
    this.inCosto.value = costo.toString();
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
