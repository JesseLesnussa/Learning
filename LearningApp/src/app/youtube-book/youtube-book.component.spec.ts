import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeBookComponent } from './youtube-book.component';

describe('YoutubeBookComponent', () => {
  let component: YoutubeBookComponent;
  let fixture: ComponentFixture<YoutubeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
