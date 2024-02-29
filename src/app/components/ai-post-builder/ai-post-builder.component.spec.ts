import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPostBuilderComponent } from './ai-post-builder.component';

describe('AiPostBuilderComponent', () => {
  let component: AiPostBuilderComponent;
  let fixture: ComponentFixture<AiPostBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiPostBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPostBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
