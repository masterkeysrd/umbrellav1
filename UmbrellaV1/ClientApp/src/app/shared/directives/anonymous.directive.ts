import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isAnonymous]'
})
export class AnonymousDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
    console.log(localStorage.getItem('jwt'));
    if (!localStorage.getItem('jwt')) {

      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
