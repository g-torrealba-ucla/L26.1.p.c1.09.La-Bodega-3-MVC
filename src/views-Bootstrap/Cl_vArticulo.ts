declare var bootstrap: any;
export default class Cl_vArticulo {
  inCosto: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  modal: any;
  constructor() {
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "articulo_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "articulo_btAceptar",
    ) as HTMLButtonElement;
    const elementoModal = document.getElementById("articulo");

    this.modal = new bootstrap.Modal(elementoModal);
    this.mostrar();
  }
  get costo(): number {
    return +this.inCosto.value;
  }
  set costo(costo: number) {
    this.inCosto.value = costo.toString();
  }
  mostrar(): void {
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}
