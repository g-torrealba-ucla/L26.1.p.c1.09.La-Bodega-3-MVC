import Cl_mArticulo from "../models/Cl_mArticulo.js";
import { I_vArticulo } from "../interfaces/I_vArticulo.js";

export default class Cl_cArticulo {
  private vista: I_vArticulo;
  private callback!: (articulo: Cl_mArticulo | null) => void;

  constructor(vista: I_vArticulo) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  // Método para que la Bodega llame a este controlador
  solicitarArticulo(callback: (articulo: Cl_mArticulo | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(new Cl_mArticulo({ costo: this.vista.costo }));
    this.vista.ocultar();
  }
}