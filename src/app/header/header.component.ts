import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(contenido) {
    this.modal.open(contenido,{centered:true})
  }
}
