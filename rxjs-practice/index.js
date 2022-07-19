import { Observable } from 'rxjs';

const LoteryChannel$ = new Observable((suscriber) => {
  const loteryNumber = [12, 11, 48, 38];
  loteryNumber.map((n) => suscriber.next(n));
});

const tv1 = LoteryChannel$.subscribe((value) => console.log(`tv1 ${value}`));

setTimeout(() => {
    const tv2 = LoteryChannel$.subscribe((value) => {
      console.log(`tv2 ${value}`);
    });
  }, 5000);
  