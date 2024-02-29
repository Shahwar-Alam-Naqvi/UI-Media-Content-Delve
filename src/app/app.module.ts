import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GeneratedPostsComponent } from './components/generated-posts/generated-posts.component';
import { ApprovedPostsComponent } from './components/approved-posts/approved-posts.component';
import { PublishedPostsComponent } from './components/published-posts/published-posts.component';
import { SchedularSettingComponent } from './components/schedular-setting/schedular-setting.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AiPostBuilderComponent } from './components/ai-post-builder/ai-post-builder.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatButtonModule} from '@angular/material/button';
import { IntegrationsComponent } from './components/integrations/integrations.component'; 
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SettingComponent } from './components/setting/setting.component'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './components/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GeneratedPostsComponent,
    ApprovedPostsComponent,
    PublishedPostsComponent,
    SchedularSettingComponent,
    AiPostBuilderComponent,
    IntegrationsComponent,
    SettingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    DragDropModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
