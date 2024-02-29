import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratedPostsComponent } from './components/generated-posts/generated-posts.component';
import { ApprovedPostsComponent } from './components/approved-posts/approved-posts.component';
import { PublishedPostsComponent } from './components/published-posts/published-posts.component';
import { SchedularSettingComponent } from './components/schedular-setting/schedular-setting.component';
import { AiPostBuilderComponent } from './components/ai-post-builder/ai-post-builder.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { SettingComponent } from './components/setting/setting.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"/post-builder", pathMatch:"full"},
  {path:"generated-posts",component:GeneratedPostsComponent},
  {path:"approved-posts",component:ApprovedPostsComponent},
  {path:"published-posts",component:PublishedPostsComponent},
  {path:"schedular-setting",component:SchedularSettingComponent},
  {path:"post-builder",component:AiPostBuilderComponent},
  {path:"integrations",component:IntegrationsComponent},
  {path:"setting",component:SettingComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
