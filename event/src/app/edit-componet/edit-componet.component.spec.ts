import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponetComponent } from './edit-componet.component';

describe('EditComponetComponent', () => {
  let component: EditComponetComponent;
  let fixture: ComponentFixture<EditComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
