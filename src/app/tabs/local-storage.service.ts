import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  set(key: string, value): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const item = window.localStorage.getItem(key);

    return JSON.parse(item);
  }
}
