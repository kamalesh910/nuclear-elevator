import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Gallery } from './components/gallery/gallery';
import { Feedback } from './components/feedback/feedback';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'gallery', component: Gallery },
  { path: 'feedback', component: Feedback },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
