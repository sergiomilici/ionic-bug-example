import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loaded$: Observable<boolean>;

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
    this.loaded$ = of(true).pipe(
      // delay(1000)
    );
  }

  async showMessage(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'header',
      message: 'message',
      buttons: [{text: 'Ok'}]
    });
    return await alert.present();
  }

}
