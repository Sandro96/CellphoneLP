import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  goScroll(option) {
    if (option == "Home") {
        window.scrollTo(0, 0)
    }
    if (option == "Products") {
        if(window.outerWidth > 1366)
        window.scrollTo(0, 750)
        if(window.outerWidth <= 1366)
        window.scrollTo(0, 630)
    }
    if (option == "Plans"){
        if(window.outerWidth > 1366)
        window.scrollTo(0, 1425)
        if(window.outerWidth <= 1366)
        window.scrollTo(0, 1425)
    }
    if (option == "News"){
        if(window.outerWidth > 1366)
        window.scrollTo(0, 2100)
        if(window.outerWidth <= 1366)
        window.scrollTo(0, 1825)
    }
    if (option == "Assistance"){
        if(window.outerWidth > 1366)
        window.scrollTo(0, 2810)
        if(window.outerWidth <= 1366)
        window.scrollTo(0, 1825)
    }
}
  constructor() { }

  ngOnInit() {
  }

}