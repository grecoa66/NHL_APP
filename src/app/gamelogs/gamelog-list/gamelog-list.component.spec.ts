import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelogListComponent } from './gamelog-list.component';

describe('GamelogListComponent', () => {
  let component: GamelogListComponent;
  let fixture: ComponentFixture<GamelogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
