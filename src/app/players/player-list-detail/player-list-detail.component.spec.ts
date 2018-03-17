import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListDetailComponent } from './player-list-detail.component';

describe('PlayerListDetailComponent', () => {
  let component: PlayerListDetailComponent;
  let fixture: ComponentFixture<PlayerListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
