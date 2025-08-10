import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ChatbotWidgetComponent } from './app/chatbot-widget-component/chatbot-widget-component';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(ChatbotWidgetComponent)
  .then(appRef => {
    const injector = (appRef as any)._injector;
    const element = createCustomElement(ChatbotWidgetComponent, { injector });
    customElements.define('chatbot-widget', element);
  });