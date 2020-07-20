import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndReferenceComponent } from './rules-and-reference.component';

describe('RulesAndReferenceComponent', () => {
  let component: RulesAndReferenceComponent;
  let fixture: ComponentFixture<RulesAndReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAndReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
