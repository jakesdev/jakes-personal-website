import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { SkeletonBlockComponent } from './skeleton-block/skeleton-block.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  declarations: [SkeletonBlockComponent],
  exports: [SkeletonBlockComponent],
})
export class SkeletonModule {}
