import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBlogPostComponent } from './components/new-blog-post/new-blog-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogsPageComponent } from './components/blogs-page/blogs-page.component';
import { LoginComponent } from './components/login/login.component';
import { DesktopViewComponent } from './components/desktop-view/desktop-view.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';
import { WebsiteComponent } from './components/website/website.component';
import { MarketStoreSubscriptionsComponent } from './components/market-store-subscriptions/market-store-subscriptions.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { MarketStoreFormsComponent } from './components/market-store-forms/market-store-forms.component';
import { PromBlogsComponent } from './components/prom-blogs/prom-blogs.component';
import { AddMarketStoreComponent } from './components/add-market-store/add-market-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';


const routes: Routes = [
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'desktop', component: DesktopViewComponent },
  { path: 'mobileView', component: MobileViewComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'subscription', component: MarketStoreSubscriptionsComponent },
  { path: 'storeForms', component: MarketStoreFormsComponent },
  { path: 'terms', component: TermsConditionsComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: PromBlogsComponent },
      { path: 'blogs', component: BlogsPageComponent },
      { path: 'newBlog', component: NewBlogPostComponent },
      { path: 'addStore', component: AddStoreComponent },
      { path: 'storeForms', component: MarketStoreFormsComponent },
      { path: '', redirectTo: 'blogs', pathMatch: 'full' },
    ]
  },
  { path: '**', component: WebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
