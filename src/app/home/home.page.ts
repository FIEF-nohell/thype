import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  type_clicked: boolean = true;
  stats_clicked: boolean = false;
  settings_clicked: boolean = false;
  average_english_word_length: any = 4.7;
  small_letters: any[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  big_letters: any[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  symbols: any[] = ["!", '"', "§", "%", "&", "/", "(", ")", "=", "?", "@", "{", "[", "]", "}", ",", ".", ";", ":", "-", "_", "#", "'", "*", "*", "<", ">"];
  numbers: any[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  main_page(){

  }

  type_option(){
    console.log("type")
    this.type_clicked = true;
    this.stats_clicked = false;
    this.settings_clicked = false;
  }

  stats_option(){
    console.log("stats")
    this.type_clicked = false;
    this.stats_clicked = true;
    this.settings_clicked = false;
  }

  settings_option(){
    console.log("settings")
    this.type_clicked = false;
    this.stats_clicked = false;
    this.settings_clicked = true;
  }

  generate_new_letter(){

  }

}
