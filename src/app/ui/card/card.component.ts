import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Card } from '../../models/card';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CardModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input({ required: true }) card!: Card;
}
