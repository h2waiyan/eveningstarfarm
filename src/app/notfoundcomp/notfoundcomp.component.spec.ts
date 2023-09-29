import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundcompComponent } from './notfoundcomp.component';

describe('NotfoundcompComponent', () => {
  let component: NotfoundcompComponent;
  let fixture: ComponentFixture<NotfoundcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundcompComponent]
    });
    fixture = TestBed.createComponent(NotfoundcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
