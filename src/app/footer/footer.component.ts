import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(contenido) {
    this.modal.open(contenido,{centered:true, scrollable:true,})
  }
}
