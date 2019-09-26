import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { DashBoardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';
 
describe('DashBoardComponent', () => {



 
  @Component({ selector: 'layout', template: '' })
  class LayoutStubComponent { }
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashBoardComponent,
        LayoutStubComponent
      ]
    }).compileComponents();
  }));
}
);