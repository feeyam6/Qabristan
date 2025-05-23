import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'signin',
    renderMode: RenderMode.Client,
  },
  { 
    path: 'require-auth', 
    renderMode: RenderMode.Client
   },
   {
     path: '**',
     renderMode: RenderMode.Prerender,
   },
];
