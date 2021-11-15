import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';
import { ArticleBoxComponent } from './article-box.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
  ],
  declarations: [
    ArticleBoxComponent
  ],
  exports: [
    ArticleBoxComponent
  ]
})
export class ArticleBoxModule {}
