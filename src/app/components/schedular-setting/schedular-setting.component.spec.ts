import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularSettingComponent } from './schedular-setting.component';

describe('SchedularSettingComponent', () => {
  let component: SchedularSettingComponent;
  let fixture: ComponentFixture<SchedularSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedularSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedularSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
