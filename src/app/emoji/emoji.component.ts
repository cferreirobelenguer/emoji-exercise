import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent {
  public emoji: String[];
  public result : String = '';
  @ViewChild('title') title!: ElementRef<HTMLElement>;
  @ViewChild('smileButton') smileButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('cryButton') cryButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('crazyButton') crazyButton!: ElementRef<HTMLButtonElement>;
  
  constructor () {
    this.emoji = ['😀', '😢', '🤪'];
  }

  ngAfterViewInit() {
    this.title.nativeElement.addEventListener('click', (event) => this.otherClick(event));
  }

  public handleClick (value:string) {
    // We get a result if user press one of the buttons
    if (value === 'smile') {
      this.result = this.emoji [0];
    } else if (value === 'cry') {
      this.result = this.emoji[1];
    } else if (value === 'crazy') {
      this.result = this.emoji[2];
    } else {
      this.result = '';
    }
  }

  public otherClick (event: Event) {
    //We activate this event when user clicks title content
    if (event?.target !== this.smileButton.nativeElement && event.target !== this.cryButton.nativeElement && event.target !== this.crazyButton.nativeElement ) {
      this.result = '😎';
    }
  }

}
