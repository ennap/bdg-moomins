import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ImageButtonComponent } from './image-button/image-button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BracketComponent } from './bracket/bracket.component';
import { MobileVoteComponent } from './mobile-vote/mobile-vote.component';
import { ResultsModalComponent } from './results-modal/results-modal.component';
import { NgChartsModule } from 'ng2-charts';
import { PlusCardComponent } from './plus-card/plus-card.component';
import { SwitchCardComponent } from './switch-card/switch-card.component';
import { VetoCardComponent } from './veto-card/veto-card.component';
import { PlayerIconsComponent } from './player-icons/player-icons.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    ImageButtonComponent,
    ProgressBarComponent,
    BracketComponent,
    MobileVoteComponent,
    ResultsModalComponent,
    PlusCardComponent,
    SwitchCardComponent,
    VetoCardComponent,
    PlayerIconsComponent,
    InfoButtonComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
