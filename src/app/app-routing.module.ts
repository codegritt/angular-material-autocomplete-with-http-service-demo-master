import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';






const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/special',
    //     pathMatch: 'full'
    //   },
     
      {
        path: 'special',
       
        component: SpecialEventsComponent
      }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  