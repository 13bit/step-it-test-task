import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabCounterComponent} from './components/tab-counter/tab-counter.component';
import {RandComponent} from './components/rand/rand.component';
import {TabsDashboardComponent} from './containers/tabs-dashboard.component';
import {LocalStorageService} from './local-storage.service';
import {TabService} from './tab.service';


@NgModule({
  declarations: [
    TabsDashboardComponent,
    TabCounterComponent,
    RandComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    TabService
  ],
  exports: [
    TabsDashboardComponent
  ]
})
export class TabsModule {
}
