import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPostsComponent } from './generated-posts.component';

describe('GeneratedPostsComponent', () => {
  let component: GeneratedPostsComponent;
  let fixture: ComponentFixture<GeneratedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
