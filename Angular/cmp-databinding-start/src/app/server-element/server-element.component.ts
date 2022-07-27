import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked{
  @Input()  element: {type:string, name:string, content:string};
  @Input()  name:string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;
  constructor() {
    console.log("Constructor called!")
   }



  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {

    console.log("ngOnInit called!")
    console.log("Text content: " + this.header.nativeElement.textContent)
    console.log("Text of paragraph: " + this.paragraph.nativeElement.textContent)
  }
  ngDoCheck(): void {
   console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit')
      console.log("Text of paragraph: " + this.paragraph.nativeElement.textContent)

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log("Text content: " + this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
