import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'tab-profile',
  templateUrl: 'tab-profile-page.component.html',
  styleUrls: ['tab-profile-page.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TabProfilePage {
  constructor() {}
}
