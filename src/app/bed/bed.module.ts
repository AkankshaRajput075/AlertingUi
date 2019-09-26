import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BedComponent } from './bed.component';
import { BrowserModule } from '@angular/platform-browser';
import { BedService } from './bed.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    declarations: [BedComponent],
    imports: [FormsModule,
        BrowserModule,
        CommonModule, 
        HttpClientModule, 
        MonitoringVitalModule,
        MatSlideToggleModule, 
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    exports: [BedComponent],
    providers: [BedService]
})
export class BedModule {


}