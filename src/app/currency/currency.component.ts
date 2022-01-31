import {Component, OnInit} from '@angular/core';
import {CurrencyConverterService} from 'src/app/currency-converter.service';
import { currencies } from 'src/app/currencies';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  srcCurrency = currencies[0].id;
  targetCurrency = currencies[1].id;
  srcValue = 1;
  targetValue: number;
  currencies = currencies;

  constructor(private ccs: CurrencyConverterService) {
  }

  ngOnInit(): void {
    this.update();
  }

  update() {
    this.ccs.convert(this.srcCurrency, this.srcValue, this.targetCurrency)
      .subscribe(value => this.targetValue = value);
  }
}
