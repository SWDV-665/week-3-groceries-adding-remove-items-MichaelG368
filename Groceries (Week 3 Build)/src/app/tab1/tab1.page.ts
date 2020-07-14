import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [
    {
      name: "Milk",
      quantity: 1,
      price: 3.48
    },

    {
      name: "Bread",
      quantity: 2,
      price: 5.15
    }

  ];

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async remove_item(item, index){
    console.log("Removing Item - ", item);
    const toast = await this.toastController.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  async add_item(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please input item details.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity'
        },
        {
          name: 'price',
          type: 'number',
          placeholder: 'Price'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (item) => {
            console.log('Confirm Ok');
            this.items.push(item);
          }
        }
      ]
    });
    await alert.present();
  }

}
