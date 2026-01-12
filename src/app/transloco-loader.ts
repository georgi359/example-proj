import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  getTranslation(lang: string) {
    //SSR / prerender: do NOT fetch over HTTP
    if (isPlatformServer(this.platformId)) {
      return of({});
    }

    //Browser: load from assets
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}