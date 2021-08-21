import { Component } from '@angular/core';

/**
 * Generated class for the PrivacyTermsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'privacy-terms',
  templateUrl: 'privacy-terms.html'
})
export class PrivacyTermsComponent {

  text: string;

  constructor() {
    console.log('Hello PrivacyTermsComponent Component');
    this.text = 'Hello World';
  }

}
