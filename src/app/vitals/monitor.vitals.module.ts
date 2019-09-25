import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalComponent, BottomSheetOverviewExampleSheet } from './monitor.vitals.component';
import { MonitoringVitalService } from './monitor.vitals.service';
import { ToggleButtonModule } from '../toggle/toggle.module';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';


@NgModule({
    declarations : [MonitoringVitalComponent ,BottomSheetOverviewExampleSheet ],
    imports : [FormsModule , 
        BrowserModule ,
         CommonModule ,
          HttpClientModule ,
          ToggleButtonModule ,
          MatNativeDateModule,
          BrowserAnimationsModule,
          DemoMaterialModule,
          ],
    entryComponents: [ BottomSheetOverviewExampleSheet],
    exports : [MonitoringVitalComponent],
    providers:[MonitoringVitalService]
    })
export class MonitoringVitalModule
{

    
}

