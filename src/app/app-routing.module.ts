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
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component'
import { MarketStoreTermsComponent } from './components/market-store-terms/market-store-terms.component';
import { MarketStoreFormsComponent } from './components/market-store-forms/market-store-forms.component';
import { PromBlogsComponent } from './components/prom-blogs/prom-blogs.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { StoresComponent } from './components/stores/stores.component';
// import { AddMarketStoreComponent } from './components/add-market-store/add-market-store.component';
// import { CardsViewComponent } from './components/cards-view/cards-view.component';



const routes: Routes = [
  { path: '', redirectTo: '/website', pathMatch: 'full' },
  { path: 'website', component: WebsiteComponent },
  { path: 'desktop', component: DesktopViewComponent },
  { path: 'mobileView', component: MobileViewComponent },
  { path: 'subscription', component: MarketStoreSubscriptionsComponent },
  { path: 'storeForms', component: MarketStoreFormsComponent },
  { path: 'menuContent', component: MenuContentComponent },
  { path: 'promsocialBlogs', component: PromBlogsComponent },
  { path: 'blogView', component: BlogViewComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'newBlog', component: NewBlogPostComponent },
  // { path: 'blogs', component: BlogsPageComponent },
  // { path: 'home', component: PromBlogsComponent },

  // { path: 'marketStore', component: StoreFormsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'marketStoreTerms', component: MarketStoreTermsComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: PromBlogsComponent },
      { path: 'newBlog', component: NewBlogPostComponent },
      { path: 'blogs', component: BlogsPageComponent },
      { path: 'addStore', component: AddStoreComponent },
      { path: 'stores', component: StoresComponent },
      // { path: 'storeForms', component: MarketStoreFormsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '**', component: WebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
