import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileVoteComponent } from './mobile-vote/mobile-vote.component';
import { BracketComponent } from './bracket/bracket.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }