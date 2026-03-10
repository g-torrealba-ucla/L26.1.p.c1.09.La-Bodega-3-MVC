// src/interfaces/I_vBodega.ts
export interface I_vBodega {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoArticulo(callback: () => void): void;
  reportar(ganancia: number): void;
  mostrar(): void;
  ocultar(): void;
}
