import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalComponent } from './monitor.vitals.component';
import { MonitoringVitalService } from './monitor.vitals.service';
import { ToggleButtonModule } from '../toggle/toggle.module';
import { BedModule } from '../bed/bed.module';


@NgModule({
    declarations : [MonitoringVitalComponent],
    imports : [FormsModule , BrowserModule , CommonModule , HttpClientModule ,ToggleButtonModule],
    exports : [MonitoringVitalComponent],
    providers:[MonitoringVitalService]
    })
export class MonitoringVitalModule
{

    
}