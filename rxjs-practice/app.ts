import { Observable, Subject, interval, skipUntil } from "rxjs";


// import { Observable} from "rxjs";
// import {fromEvent} from 'rxjs'
// import { Subject } from "rxjs";
// import { BehaviorSubject } from "rxjs";
// import { ReplaySubject } from "rxjs";
// import { AsyncSubject } from "rxjs";
// import { merge, Observable, map } from "rxjs";
// import { from, pluck} from "rxjs";


// let observable = Observable.create((observer: any) => {
//   try {
//     observer.next("Hey guys");
//     observer.next("How are you?");
//     setInterval(() => {
//       observer.next("I am good");
//     }, 2000);
//   } catch (err) {
//     observer.error(err);
//   }
// })

// let observable2 = new Observable((observer)=>{
//     observer.next('Hey guys from observabl 2')
// })

// let observer = observable.subscribe(
//   (x: any) => addItem(x),
//   (error: any) => addItem(error),
//   () => addItem("Complited")
// );

// setTimeout(() => {
//   let observer2 = observable.subscribe(
//     (x:any)=> addItem('Subscriber 2: '+ x)
//   )
// }, 1000);
// observer.add(observer2)

// observable2.subscribe((x:any)=>console.log(x));

// let observable = fromEvent(document, 'mousemove')

// setTimeout(() => {
//     let subscription = observable.subscribe(
//         (x:any) => addItem(x)
//     )
// }, 2000);

// const subject = new Subject();

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     ()=> addItem('Observer 1 completed') 
// )

// subject.next('The first thing has been sent')

// let observer2 = subject.subscribe(
//     data => addItem('Observer 2: ' + data)
// )

// subject.next('The second thing have been sent')
// subject.next('The third thing have been sent')

// observer2.unsubscribe()
// subject.next('The final thing have been sent')

// const subject = new BehaviorSubject('First');

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     ()=> addItem('Observer 1 completed') 
// )

// subject.next('The first thing has been sent')

// subject.next('... Observer 2 is about to subscribe...')

// let observer2 = subject.subscribe(
//     data => addItem('Observer 2: ' + data)
// )

// subject.next('The second thing have been sent')
// subject.next('The third thing have been sent')

// observer2.unsubscribe()
// subject.next('The final thing have been sent')

// const subject = new ReplaySubject(30, 500);

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     ()=> addItem('Observer 1 completed') 
// )

// let i = 1;
// let int = setInterval(()=>subject.next(i++), 100)

// setTimeout(() => {
//   let observer2 = subject.subscribe(
//   data => addItem('Observer 2: ' + data)
// )
// }, 500);

// const subject = new AsyncSubject();

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//    ()=> addItem('Observer 1 completed') 
// )

// let i = 1;
// let int = setInterval(()=>subject.next(i++), 100)

// setTimeout(() => {
//   let observer2 = subject.subscribe(
//   data => addItem('Observer 2: ' + data)
// )
// subject.complete()
// }, 500);


// const observable = Observable.create((observer: any)=>{
//   observer.next("Hey guys")
// });
// const observable2 = Observable.create((observer: any)=>{
//   observer.next("How is it going")
// });

// let newObs = merge(observable, observable2)

// newObs.subscribe((x:any)=> addItem(x))


// Observable.create((observer: any)=>{
//   observer.next("Hey guys")
// }).pipe(map((val: any) => val.toUpperCase()))
//   .subscribe((x:any)=>addItem(x))

// from([
//   { first: 'Gary',
//     last: 'Simon',
//     age: '34'
//   },
//   { first: 'Jane',
//   last: 'Simon',
//   age: '34'
//   },
//   { first: 'John',
//   last: 'Simon',
//   age: '34'
//   }
// ]).pipe(
//   pluck('first')
// ).subscribe((x:any)=> addItem(x))

let observable1 = Observable.create((data: any)=>{
  let i = 1
  setInterval(()=>{
    data.next(i++)
  }, 1000)
})

let observable2 = new Subject;

setInterval(()=>{
    observable2.next('Hey!')
}, 3000)

let newObs= observable1.skipUntil(observable2)

newObs.subscribe((x:any)=> addItem(x))

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
