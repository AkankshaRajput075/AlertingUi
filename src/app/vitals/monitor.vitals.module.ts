import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalService } from './monitor.vitals.service';
import { ToggleButtonModule } from '../toggle/toggle.module';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import { MonitoringVitalComponent } from './monitor.vitals.component';


@NgModule({
    declarations : [MonitoringVitalComponent  ],
    imports : [FormsModule , 
        BrowserModule ,
         CommonModule ,
          HttpClientModule ,
          ToggleButtonModule ,
          MatNativeDateModule,
          BrowserAnimationsModule,
          DemoMaterialModule,
          ],
    entryComponents: [ ],
    exports : [MonitoringVitalComponent],
    providers:[MonitoringVitalService,MonitoringVitalComponent]
    })
export class MonitoringVitalModule
{

    
}

