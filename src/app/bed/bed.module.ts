import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BedComponent } from './bed.component';
import { BrowserModule } from '@angular/platform-browser';
import { BedService } from './bed.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';
import { AlertComponent } from '../alert/alert.component';
import { AlertModule } from '../alert/alert.module';


@NgModule({
    declarations : [BedComponent ],
    imports : [FormsModule , BrowserModule , CommonModule , HttpClientModule ,MonitoringVitalModule,AlertModule ],
    exports : [BedComponent],
    providers:[BedService]
    })
export class BedModule
{

    
}