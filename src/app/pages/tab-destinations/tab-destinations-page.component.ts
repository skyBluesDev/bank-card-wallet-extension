import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'tab-destinations',
  templateUrl: 'tab-destinations-page.component.html',
  styleUrls: ['tab-destinations-page.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TabDestinationsPage {
  constructor() {}
}
