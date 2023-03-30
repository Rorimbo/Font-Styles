import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'font-styles';

  @ViewChild('textBlock') textBlock: any;
  @ViewChild('menu') menu: any;

  text: string = 'ROME';
  isWrap = false;
  wrapText: string = '../assets/left.svg';
  buttons = [
    {
      buttonsClassList: 'btn color-one',
      textClassList: ['color', 'color-one'],
      buttonText: 'color 1',
    },
    {
      buttonsClassList: 'btn neon-one',
      textClassList: ['neon', 'neon-one'],
      buttonText: 'neon 1',
    },
    {
      buttonsClassList: 'btn color-two',
      textClassList: ['color', 'color-two'],
      buttonText: 'color 2',
    },
    {
      buttonsClassList: 'btn neon-two',
      textClassList: ['neon', 'neon-two'],
      buttonText: 'neon 2',
    },
    {
      buttonsClassList: 'btn color-three',
      textClassList: ['color', 'color-three'],
      buttonText: 'color 3',
    },
    {
      buttonsClassList: 'btn neon-three',
      textClassList: ['neon', 'neon-three'],
      buttonText: 'neon 3',
    },
    {
      buttonsClassList: 'btn color-four',
      textClassList: ['color', 'color-four'],
      buttonText: 'color 4',
    },
    {
      buttonsClassList: 'btn neon-four',
      textClassList: ['neon', 'neon-four'],
      buttonText: 'neon 4',
    },
    {
      buttonsClassList: 'btn color-five',
      textClassList: ['color', 'color-five'],
      buttonText: 'color 5',
    },
    {
      buttonsClassList: 'btn neon-five',
      textClassList: ['neon', 'neon-five'],
      buttonText: 'neon 5',
    },
    {
      buttonsClassList: 'btn color-six',
      textClassList: ['color', 'color-six'],
      buttonText: 'color 6',
    },
    {
      buttonsClassList: 'btn neon-six',
      textClassList: ['neon', 'neon-six'],
      buttonText: 'neon 6',
    },
    {
      buttonsClassList: 'btn color-seven',
      textClassList: ['color', 'color-seven'],
      buttonText: 'color 7',
    },
    {
      buttonsClassList: 'btn neon-seven',
      textClassList: ['neon', 'neon-seven'],
      buttonText: 'neon 7',
    },
    {
      buttonsClassList: 'btn color-eight',
      textClassList: ['color', 'color-eight'],
      buttonText: 'color 8',
    },
    {
      buttonsClassList: 'btn neon-eight',
      textClassList: ['neon', 'neon-eight'],
      buttonText: 'neon 8',
    },
  ];

  addStyle(classNames: string[]) {
    this.textBlock.nativeElement.classList = [];

    classNames.forEach((className) => {
      this.textBlock.nativeElement.classList.add(className);
    });
  }

  wrapUnwrap() {
    this.isWrap = !this.isWrap;
    this.menu.nativeElement.classList.toggle('active');
    this.wrapText = this.isWrap ? '../assets/right.svg' : '../assets/left.svg';
  }
}
