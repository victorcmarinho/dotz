import { Component } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';

@Component({
    selector: 'app-button',
    template: '',
})
class InputCompoent { }

export default {
    title: 'shared/Input',
} as Meta<InputCompoent>;


export const Default: Story = () => ({
    template: '<input class="input" />',
});

export const Password: Story = () => ({
    template: '<input class="input" type="password" />',
  });
