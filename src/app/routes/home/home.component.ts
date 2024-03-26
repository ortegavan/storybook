import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { Card } from '../../models/card';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardComponent],
})
export class HomeComponent {
    card: Card = {
        id: 1,
        name: 'Card 1',
        header: 'Advanced Card',
        subheader: 'Card Subheader',
        imageUrl: 'https://primefaces.org/cdn/primeng/images/usercard.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!',
    };
}
