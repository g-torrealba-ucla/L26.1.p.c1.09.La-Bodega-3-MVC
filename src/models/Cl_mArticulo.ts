export default class Cl_mArticulo {
  private _costo: number = 0;

  constructor({ costo }: { costo: number } = { costo: 0 }) {
    this.costo = costo;
  }

  set costo(costo: number) {
    this._costo = +costo;
  }

  get costo(): number {
    return this._costo;
  }

  get ganancia(): number {
    return this.costo * 0.5;
  }
}
