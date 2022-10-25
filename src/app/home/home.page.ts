import { Component } from '@angular/core';
import settings from '../../settings.json';


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
  cathegory: any[];
  letters_to_type: string = "";

  ngOnInit(){
    this.cathegory = []
    if(settings.symbols == true){
      this.cathegory.push(this.symbols)
    }
    if(settings.numbers == true){
      this.cathegory.push(this.numbers)
    }
    if(settings.big_letters == true){
      this.cathegory.push(this.big_letters)
    }
    if(settings.small_letters == true){
      this.cathegory.push(this.small_letters)
    }

    for(let i = 0; i < 10; i++){
      this.letters_to_type += this.generate_new_letter()
    }
    console.log(this.letters_to_type)
  }

  rndInt(min, max){
    return Math.floor(Math.random() * (max - min + 1))
  }

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
    if(this.cathegory.length == 1){      
      let max = this.cathegory[0].length - 1
      let min = 0
      return this.cathegory[0][this.rndInt(min, max)]
    }
    else{
      let max = this.cathegory.length - 1
      let min = 0
      let chosen_array = this.cathegory[this.rndInt(min, max)]
      max = chosen_array.length - 1
      min = 0
      return chosen_array[this.rndInt(min, max)]
    }
  }

}


