import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import { FormsModule } from '@angular/forms'
import { BedModule } from '../bed/bed.module';
import { ConfigService } from '../service/config';
import { AlertComponent } from '../alert/alert.component';

@NgModule({
    declarations : [LayoutComponent],
    imports : [FormsModule ,BedModule],
    exports : [LayoutComponent],
    providers:[ConfigService]
    })
    export class LayoutModule
    {
    }