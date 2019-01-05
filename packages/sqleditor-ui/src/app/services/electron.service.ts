import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  _win: any = window;
  constructor() { }

  isElectron() {
    return this._win && this._win.process && this._win.process.type;
  }
}
