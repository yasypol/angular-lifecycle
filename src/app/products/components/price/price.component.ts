import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;

  // EL $ es una convención de nombres para observables
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');

    //eventos "infinitos", hay que limpiarlos a mano en OnDestroy
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${ value }`));
    // Los listeners de javascript tb se deben destruir a mano:
    // window.addEventListener()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes })
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
