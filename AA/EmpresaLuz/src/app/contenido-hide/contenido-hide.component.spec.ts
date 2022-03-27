/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContenidoHideComponent } from './contenido-hide.component';

describe('ContenidoHideComponent', () => {
  let component: ContenidoHideComponent;
  let fixture: ComponentFixture<ContenidoHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
