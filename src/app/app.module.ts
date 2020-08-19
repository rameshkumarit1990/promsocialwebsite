import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NewBlogPostComponent } from './components/new-blog-post/new-blog-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { CreateBlogComponent } from './components/new-blog-post/create-blog/create-blog.component';
import { DesktopPreviewComponent } from './components/new-blog-post/desktop-preview/desktop-preview.component';
import { MobilePreviewComponent } from './components/new-blog-post/mobile-preview/mobile-preview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BlogsPageComponent } from './components/blogs-page/blogs-page.component';
import { LoginComponent } from './components/login/login.component';
import { DesktopViewComponent } from './components/desktop-view/desktop-view.component';
import { MarketModalComponent } from './components/market-modal/market-modal.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';
import { WebsiteComponent } from './components/website/website.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarketStoreSubscriptionsComponent } from './components/market-store-subscriptions/market-store-subscriptions.component';
import { MarketStoreFormsComponent } from './components/market-store-forms/market-store-forms.component';
import { ContactDetailsComponent } from './components/market-store-forms/contact-details/contact-details.component';
import { StoreDetailsComponent } from './components/market-store-forms/store-details/store-details.component';
import { StoreDetailsPreviewComponent } from './components/market-store-forms/store-details-preview/store-details-preview.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PromBlogsComponent } from './components/prom-blogs/prom-blogs.component';
import { AddMarketStoreComponent } from './components/add-market-store/add-market-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './components/form-fields/dynamic-form/dynamic-form.component';
import { NumericFieldComponent } from './components/form-fields/numeric-field/numeric-field.component';
import { PhoneNumberFieldComponent } from './components/form-fields/phone-number/phone-number-field.component';
import { StringFieldComponent } from './components/form-fields/string-field/string-field.component';
import { ImageFieldComponent } from './components/form-fields/image-field/image-field.component';
import { VideoFieldComponent } from './components/form-fields/video-field/video-field.component';
import { MultipleImageFieldComponent } from './components/form-fields/multiple-image-field/multiple-image-field.component';
import { TextAreaFieldComponent } from './components/form-fields/text-area-field/text-area-field.component';
import { DropdownFieldComponent } from './components/form-fields/dropdown-field/dropdown-field.component';
import { CheckboxFieldComponent } from './components/form-fields/checkbox-field/checkbox-field.component';
import { GroupCheckboxComponent } from './components/form-fields/group-checkbox/group-checkbox.component';
import { MultiMediaFieldComponent } from './components/form-fields/multi-media-field/multi-media-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBlogPostComponent,
    FileUploadComponent,
    CreateBlogComponent,
    DesktopPreviewComponent,
    MobilePreviewComponent,
    DashboardComponent,
    ToolbarComponent,
    BlogsPageComponent,
    LoginComponent,
    DesktopViewComponent,
    MarketModalComponent,
    MobileViewComponent,
    WebsiteComponent,
    FooterComponent,
    MarketStoreSubscriptionsComponent,
    MarketStoreFormsComponent,
    ContactDetailsComponent,
    StoreDetailsComponent,
    StoreDetailsPreviewComponent,
    TermsConditionsComponent,
    PromBlogsComponent,
    AddMarketStoreComponent,
    AddStoreComponent,

    DynamicFieldDirective,
    DynamicFormComponent,
    NumericFieldComponent,
    StringFieldComponent,
    DropdownFieldComponent,
    CheckboxFieldComponent,
    TextAreaFieldComponent,
    PhoneNumberFieldComponent,
    ImageFieldComponent,
    VideoFieldComponent,
    MultipleImageFieldComponent,
    GroupCheckboxComponent,
    MultiMediaFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
