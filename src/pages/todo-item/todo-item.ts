import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html',
})
export class TodoItemPage {

  todoItem: {
    title: string,
    note: string,
    date: string};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoItem = this.navParams.get('todoItem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoItemPage');
  }

  Zatvori() {
    this.navCtrl.pop();
  }

}
