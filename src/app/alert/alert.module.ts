import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';
import { AlertComponent } from '../alert/alert.component';
import { BedModule } from '../bed/bed.module';
import { MonitoringVitalComponent } from '../vitals/monitor.vitals.component';


@NgModule({
    declarations : [AlertComponent ],
    imports : [FormsModule , BrowserModule , CommonModule , HttpClientModule ,MonitoringVitalModule ],
    exports : [ AlertComponent ],
    providers:[]
    })
export class AlertModule
{

    
}