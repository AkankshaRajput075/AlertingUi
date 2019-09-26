import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';
import { MatNativeDateModule } from '@angular/material/core';
import { CheckboxComponent } from './checkbox.component';
import { DemoMaterialModule } from '../vitals/material.module';


@NgModule({
    declarations: [CheckboxComponent],
    imports: [FormsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        MonitoringVitalModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    exports: [CheckboxComponent],
    providers: [CheckboxComponent]
})
export class CheckboxModule {


}
