import { Component } from '@angular/core';
import { loadMicroApp } from 'qiankun';
import { Constants } from '../Constants';

@Component({
  selector: 'log-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  constructor(){
    this.loadChild();  
  }
  
  
private  loadChild(){


  loadMicroApp(
    { name: 'childConfig',
       entry: '//127.0.0.1:4200',
       container: '#logConfig'
     }
  );
 
}


}