import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (process.env.NODE_ENV === 'production') {
  require('@angular/core').enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
