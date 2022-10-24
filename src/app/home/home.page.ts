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


}
