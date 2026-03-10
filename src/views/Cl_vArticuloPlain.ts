import { I_vArticulo } from "../interfaces/I_vArticulo.js";

export default class Cl_vArticuloPlain implements I_vArticulo {
  private inCosto: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    // Capturamos el section que funciona como "modal" en HTML plano
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
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
    this.inCosto.value = ""; // Limpiamos el input cada vez que se abre
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}