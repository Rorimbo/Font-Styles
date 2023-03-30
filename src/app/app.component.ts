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
