import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength: number = 0;
  letters: boolean = false;
  numbers: boolean = false;
  specailChars: boolean = false;
  password: string = '';

  mustInclude(e: string) {
    if(e === 'letters')
      this.letters = !this.letters;
    else if(e === 'numbers')
      this.numbers = !this.numbers;
    else if(e === 'specailChars')
      this.specailChars = !this.specailChars;
  }

  passwordGenerate() {
    let chars = '';
    if(this.letters)
      chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(this.numbers)
      chars += '0123456789';
    if(this.specailChars)
      chars += '!@#$%^&*(){}[]|\~:;?/<>.,';
    let generatedPassword = '';
    for(let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[index];
    }
    this.password = generatedPassword;
  }
}
