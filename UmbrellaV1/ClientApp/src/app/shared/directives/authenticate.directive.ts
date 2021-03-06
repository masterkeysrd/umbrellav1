import { Directive, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[isAuthenticate]'
})
export class AuthenticateDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
    console.log(localStorage.getItem('jwt'));
    if (localStorage.getItem('jwt')) {
      
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
