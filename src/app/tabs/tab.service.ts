import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';

const LS_TAB_COUNT = 'tab-count';

@Injectable()
export class TabService {

  constructor(private storage: LocalStorageService) {
  }

  setTotal(number: number): void {
    this.storage.set(LS_TAB_COUNT, number);
  }


  getTotal(): number {
    return this.storage.get(LS_TAB_COUNT);
  }


}
