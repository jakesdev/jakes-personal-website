import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format.pipe';

import { MoneyPipe } from './money.pipe';
import { NullDisplayFormatPipe } from './null-display.pipe';
import { NumberPipe } from './number-format.pipe';
import { RatePercentPipe } from './rate-percent.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MoneyPipe,
    DateFormatPipe,
    RatePercentPipe,
    NumberPipe,
    NullDisplayFormatPipe
  ],
  exports: [
    MoneyPipe,
    DateFormatPipe,
    RatePercentPipe,
    NumberPipe,
    NullDisplayFormatPipe
  ],
})
export class PipesModule {}
