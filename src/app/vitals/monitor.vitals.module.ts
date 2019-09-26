import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitoringVitalComponent } from './monitor.vitals.component';


@NgModule({
    declarations: [MonitoringVitalComponent],
    imports: [FormsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ],
    entryComponents: [],
    exports: [MonitoringVitalComponent],
    providers: [MonitoringVitalService, MonitoringVitalComponent]
})
export class MonitoringVitalModule {


}

