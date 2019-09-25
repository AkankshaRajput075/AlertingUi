import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let appComponent:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;

@Component({selector: 'dashboard', template: ''})
class DashBoardStubComponent{}


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashBoardStubComponent
      ],
    }).compileComponents();
  }));
  



});
