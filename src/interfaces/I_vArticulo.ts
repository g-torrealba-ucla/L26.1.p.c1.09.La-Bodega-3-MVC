export interface I_vArticulo {
  get costo(): number;
  set costo(c: number);
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}