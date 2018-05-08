import 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-dark.css';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
