import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAlumnoComponent } from './tab-alumno.component';

describe('TabAlumnoComponent', () => {
  let component: TabAlumnoComponent;
  let fixture: ComponentFixture<TabAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
