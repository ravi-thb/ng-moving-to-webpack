import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
@Component({
selector: 'my-app',
template:
  `<p>Page Not Found!</p>
  `
})
export class PageNotFoundComponent {
  public constructor(private titleService: Title ) { }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( 'page not found!' );
  }
}