import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  peso:any;
  altura:any;
  imc:any;
  status:any;
  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async enviadados(){
    console.log(this.peso);
    console.log(this.altura);
    this.imc=this.peso/((this.altura)*(this.altura));
    console.log(this.imc);
    if(this.imc<20){
      this.status="Abaixo do Peso";
    }
    if(this.imc>=20 && this.imc<=24){
      this.status="Peso Normal";
    }
    if(this.imc>=24.1 && this.imc<=29){
      this.status="Excesso do Peso ";
    }
    if(this.imc>=29.1 && this.imc<=34){
       this.status="Obesidade";
    }
    if(this.imc>=35){
      this.status="Obesidade Morbida";
    }

    console.log(this.status);

    const alert = await this.alertController.create({
      header: 'Seu índice de massa corporea é: ',
      subHeader: this.imc,
      message: this.status,
      buttons:[{
        text:'OK',
        handler:()=>{
          this.closeModal();
        }
      }]
    });

    await alert.present();
  }



  async closeModal(){
    const onClosedData:string = "Wrapped UP!";
    await this.modalController.dismiss(onClosedData);
  }

}
