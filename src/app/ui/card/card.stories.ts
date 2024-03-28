import type { Meta, StoryObj } from '@storybook/angular';
import { Card } from '../../models/card';
import { CardComponent } from './card.component';

// Criação de mock para teste
const card: Card = {
    id: 1,
    name: 'Card 1',
    header: 'Advanced Card',
    subheader: 'Card Subheader',
    imageUrl: 'https://primefaces.org/cdn/primeng/images/usercard.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!',
};

// Configuração dos metadados do componente. Title define como o componente aparecerá no dashboard do Storybook.
const meta: Meta<CardComponent> = {
    title: 'UI/Card',
    component: CardComponent,
    tags: ['autodocs'], // Define que a documentação será gerada automaticamente.
};
// Precisamos exportar as configurações do componente para que o Storybook possa renderizá-lo.
export default meta;

// Criação da história principal do componente. O argumento args é utilizado para passar dados para o componente.
export const primary: StoryObj<CardComponent> = {
    args: {
        card: card,
    },
};
