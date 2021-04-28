import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../servicios/clase.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  clases:any=[];
 
  
  constructor(private cs: ClaseService) {}

  ngOnInit(): void {
    this.getClases();
    
  }

  public getClases(){
    this.cs.getClases().then((val)=>{
      console.log(val);
      this.clases=val;
    })
  }

}
