import { NgModule } from '@angular/core';
import { PrivacyTermsComponent } from './privacy-terms/privacy-terms';
import { FilterModalComponent } from './filter-modal/filter-modal';
import { SupportComponent } from './support/support';
@NgModule({
	declarations: [PrivacyTermsComponent,
    FilterModalComponent,
    SupportComponent,
    SupportComponent],
	imports: [],
	exports: [PrivacyTermsComponent,
    FilterModalComponent,
    SupportComponent,
    SupportComponent]
})
export class ComponentsModule {}
