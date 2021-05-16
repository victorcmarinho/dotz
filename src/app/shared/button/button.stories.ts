import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
    title: 'shared/Button',
    component: ButtonComponent,
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
    template: `<app-button>Button</app-button>`,
});

export const Default = Template.bind({});
