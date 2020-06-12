import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('parallax') parallax: ElementRef;
  @ViewChild('parallax2') parallax2: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let instanceParallax = new M.Parallax(this.parallax.nativeElement, {});
    let instanceParallax2 = new M.Parallax(this.parallax2.nativeElement, {});
  }



}