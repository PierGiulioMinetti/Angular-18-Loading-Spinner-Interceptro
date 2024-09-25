import { Route } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { PostsResolver } from "../../core/resolvers/posts.resolver";

export const ROUTES: Route[] = [{
  path: '',
  component: PostsComponent,
  resolve: {
    posts: PostsResolver,
  }
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}]
