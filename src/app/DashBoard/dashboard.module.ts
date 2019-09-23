import {NgModule} from '@angular/core';
import {DashBoardComponent} from './dashboard.component';
import {LayoutModule} from '../Layout/layout.module'
import { PatientModule } from '../patient/patient.module';
import { ConfigService } from '../service/config';

@NgModule({
    declarations : [DashBoardComponent],
    imports : [LayoutModule , PatientModule],
    exports : [DashBoardComponent],
    providers : [ConfigService]
    })
    export class DashBoardModule
    {
    }