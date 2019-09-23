import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BedComponent } from './bed.component';
import { BrowserModule } from '@angular/platform-browser';
import { BedService } from './bed.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../Layout/layout.module';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';


@NgModule({
    declarations : [BedComponent],
    imports : [FormsModule , BrowserModule , CommonModule , HttpClientModule ,MonitoringVitalModule],
    exports : [BedComponent],
    providers:[BedService]
    })
export class BedModule
{

    
}