import Cl_mArticulo from "../models/Cl_mArticulo.js";
import vista from "../views/Cl_vArticulo.js";
export default class Cl_cArticulo {
  private vista = new vista();
  callback: (articulo: Cl_mArticulo | null) => void;
  constructor({
    callback,
  }: {
    callback: (articulo: Cl_mArticulo | null) => void;
  }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
  }
  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  btAceptarOnClick() {
    this.callback(new Cl_mArticulo({ costo: this.vista.costo }));
    this.vista.ocultar();
  }
}
