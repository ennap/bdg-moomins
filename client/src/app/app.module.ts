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
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    ImageButtonComponent,
    ProgressBarComponent,
    BracketComponent,
    MobileVoteComponent,
    ResultsModalComponent
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
