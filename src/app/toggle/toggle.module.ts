import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToggleButtonComponent } from '../toggle/toggle.component';


@NgModule({
    declarations : [ToggleButtonComponent],
    imports : [FormsModule , BrowserModule , CommonModule , HttpClientModule ],
    exports : [ToggleButtonComponent]
    })
export class ToggleButtonModule
{

    
}