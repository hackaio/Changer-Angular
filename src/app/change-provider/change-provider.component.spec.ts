import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProviderComponent } from './change-provider.component';

describe('ChangeProviderComponent', () => {
  let component: ChangeProviderComponent;
  let fixture: ComponentFixture<ChangeProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
