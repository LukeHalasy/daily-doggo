import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  scoped: true,
})

export class AppRoot {
  render() {
    return (
      <div>
        <dog-list></dog-list>
      </div>
    );
  }
}