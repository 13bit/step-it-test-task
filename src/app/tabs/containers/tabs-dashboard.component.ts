import {Component, HostListener, OnInit} from '@angular/core';
import {TabService} from '../tab.service';

const URL = 'http://localhost:4200';

@Component({
  selector: 'tabs-dashboard',
  templateUrl: './tabs-dashboard.component.html',
  styleUrls: ['./tabs-dashboard.component.css']

})
export class TabsDashboardComponent implements OnInit {
  tabs = [];
  total: number;

  constructor(private tabService: TabService) {
  }

  ngOnInit(): void {
    this.total = this.tabService.getTotal() || 1;
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(ev: StorageEvent) {
    this.total = Number(ev.newValue);
  }

  openInNewTab() {
    const newTab = window.open(URL, '_blank');

    this.tabs.push(newTab);
    this.total = this.tabs.length + 1;
    this.tabService.setTotal(this.total);
  }

  closeTabs() {
    this.tabs = this.tabs.reduce((acc, tab) => {
      const rand = tab.document.getElementById('rand');
      if (!rand) {
        return;
      }

      const randNumber = Number(rand.innerText);

      if (randNumber % 2 === 0) {
        tab.close();
      } else {
        acc.push(tab);
      }

      return acc;
    }, []);

    this.total = this.tabs.length + 1;
    this.tabService.setTotal(this.tabs.length + 1);

  }
}
