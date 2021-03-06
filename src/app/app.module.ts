import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashBoardModule} from './DashBoard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {LayoutModule} from './Layout/layout.module';
import { PatientModule } from './patient/patient.module';
import { BedModule } from './bed/bed.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './service/config';
import { MonitoringVitalModule } from './vitals/monitor.vitals.module';
import {MonitoringVitalComponent} from './vitals/monitor.vitals.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashBoardModule,
    FormsModule,
    LayoutModule,
    PatientModule,
    BedModule,
    HttpClientModule,
    MonitoringVitalModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
