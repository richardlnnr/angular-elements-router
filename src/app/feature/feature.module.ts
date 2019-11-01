import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { ChildAModule } from './child-a/child-a.module';
import { ChildBModule } from './child-b/child-b.module';


@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ChildAModule,
    ChildBModule
  ]
})
export class FeatureModule { }
