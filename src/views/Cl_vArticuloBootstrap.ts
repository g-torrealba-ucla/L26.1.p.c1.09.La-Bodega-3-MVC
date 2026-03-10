import { I_vArticulo } from "../interfaces/I_vArticulo.js";
declare var bootstrap: any;

export default class Cl_vArticuloBootstrap implements I_vArticulo {
  private inCosto: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("articulo");
    this.modal = new bootstrap.Modal(elementoModal);
  }

  get costo(): number {
    return +this.inCosto.value;
  }

  set costo(costo: number) {
    this.inCosto.value = costo.toString();
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inCosto.value = ""; // Limpiamos al abrir
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
  }
}