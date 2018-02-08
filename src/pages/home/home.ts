import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AddToDoPage} from "../add-to-do/add-to-do";
import { TodoService } from '../../shared/TodoService';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { TodoItemPage } from '../todo-item/todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  items: Array<{title: string, note: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public todoService: TodoService,
    public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.todoService.getAll().then((todos) => {
      this.items = todos;
    });
  }
  public selectItem(item) {
    this.selectedItem = item;
    this.modalCtrl.create(TodoItemPage, {todoItem: item}).present();
  }

  public addNewTodo() {
    this.navCtrl.push(AddToDoPage);
  }

}