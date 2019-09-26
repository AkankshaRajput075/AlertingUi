import { LayoutComponent } from './layout.component';
import { Component } from '@angular/core';
import { async } from 'q';
import { TestBed } from '@angular/core/testing';


 
describe('LayoutComponent', () => {
    @Component({ selector: 'bed', template: '' })
    class BedStubComponent { }
 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutComponent,
                BedStubComponent
            ]
        }).compileComponents();
    }));
 
}
);