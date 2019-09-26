import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {

  @Component({ selector: 'app-dashboard', template: '' })
  class DashBoardStubComponent { }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashBoardStubComponent
      ],
    }).compileComponents();
  }));

});
