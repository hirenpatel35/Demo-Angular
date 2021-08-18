import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserPostsComponent } from './jph-user-posts.component';

describe('JphUserPostsComponent', () => {
  let component: JphUserPostsComponent;
  let fixture: ComponentFixture<JphUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JphUserPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
