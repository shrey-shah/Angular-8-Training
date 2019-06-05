import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//loads the Angular's entry point modules i.e. Appmodule 
//aka application bootstraping
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
