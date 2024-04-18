import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from '../main';
// import { DOCUMENT } from "@angular/common";


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // {  provide: DOCUMENT,
    //   useFactory,
      // deps: [PLATFORM_ID]}
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
