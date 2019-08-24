import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  constructor(public modalController: ModalController) { }

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
    if(this.imc>=25 && this.imc<=29){
      this.status="Acima do Peso ";
    }
  }



  async closeModal(){
    const onClosedData:string = "Wrapped UP!";
    await this.modalController.dismiss(onClosedData);
  }

}
