import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileVoteComponent } from './mobile-vote/mobile-vote.component';
import { BracketComponent } from './bracket/bracket.component';

const routes: Routes = [
  {path: '', component: BracketComponent},
  {path: 'bracket', component: BracketComponent},
  {path: 'mobile', component: MobileVoteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }