import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageAIComponent } from './MyComponents/image-ai/image-ai.component';
import { TextCorrectionComponent } from './MyComponents/text-correction/text-correction.component';

const routes: Routes = [
  { path: 'text-correction', component: TextCorrectionComponent },
  { path: 'image-ai', component: ImageAIComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
