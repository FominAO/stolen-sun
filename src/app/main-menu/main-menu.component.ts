import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuItems: {label: string, path: string}[] = [
    {
      label: 'Continue',
      path: 'continue'
    },
    {
      label: 'New Game',
      path: 'new'
    },
    {
      label: 'Settings',
      path: 'settings'
    },
    {
      label: 'Achievements',
      path: 'achievements'
    },
    {
      label: 'Exit Game',
      path: 'loading'
    },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

  onNewGameClick(audio: HTMLAudioElement) {
    audio.volume = 0.1;
    audio.play();
  }

}
