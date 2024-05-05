import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SwiperDirective } from '../../shared/directives/swiper.directive';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'tab-my-cards',
  templateUrl: 'tab-my-cards-page.component.html',
  styleUrls: ['tab-my-cards-page.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabMyCardsPage {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  cards: { id: string }[] = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}
