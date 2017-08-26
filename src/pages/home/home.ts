import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informacion:any = []
  username:string = '';
  constructor(private _github:GithubProvider) {
  }

  fnDojo()
  {
    if (!this.username)
    {
      alert('Nombre de usuario vacio');
      return;
    }
    var promise = this._github.buscarUsuario(this.username)
    promise.then(data=>{
      this.informacion = data
    });
  }

}
