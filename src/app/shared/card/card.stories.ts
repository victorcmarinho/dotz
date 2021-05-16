import { Story, Meta } from '@storybook/angular/types-6-0';

import { CardComponent } from './card.component';

export default {
  title: 'shared/Card',
  component: CardComponent,
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'Product Name',
  image:
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsbCUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  price: '10',
};
