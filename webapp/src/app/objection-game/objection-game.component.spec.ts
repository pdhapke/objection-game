import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionGameComponent } from './objection-game.component';

describe('ObjectionGameComponent', () => {
  let component: ObjectionGameComponent;
  let fixture: ComponentFixture<ObjectionGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectionGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
