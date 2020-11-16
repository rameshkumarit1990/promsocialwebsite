import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewBlogPostComponent } from './components/new-blog-post/new-blog-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatCarouselModule } from '@ngmodule/material-carousel';


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
import { PromBlogsComponent } from './components/prom-blogs/prom-blogs.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";


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
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { AddressFeildComponent } from './components/form-fields/address-feild/address-feild.component';
import { MarketStoreTermsComponent } from './components/market-store-terms/market-store-terms.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { ImageVideoFieldComponent } from './components/form-fields/image-video-field/image-video-field.component';
import { StoresComponent } from './components/stores/stores.component';
import { SearchBarDirective } from './directives/search-bar.directive';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FeatureRequestComponent } from './components/feature-request/feature-request.component';
import { ScrollAnimationsComponent } from './components/scroll-animations/scroll-animations.component';

// import { FeatureSlidesLeftComponent } from './components/feature-slides-left/feature-slides-left.component';
// import { FeatureSlidesRightComponent } from './components/feature-slides-right/feature-slides-right.component';
// import { StoreFormsComponent } from './store-forms/store-forms.component';
// import { MarketStoreContactDetailsComponent } from './store-forms/market-store-contact-details/market-store-contact-details.component';
// import { MarketStoreStoreDetailsComponent } from './store-forms/market-store-store-details/market-store-store-details.component';

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
    PromBlogsComponent,
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
    MultiMediaFieldComponent,
    MenuContentComponent,
    AddressFeildComponent,
    MarketStoreTermsComponent,
    BlogViewComponent,
    ImageVideoFieldComponent,
    StoresComponent,
    SearchBarDirective,
    TermsComponent,
    PrivacyPolicyComponent,
    FeatureRequestComponent,
    ScrollAnimationsComponent
    // FeatureSlidesLeftComponent,
    // FeatureSlidesRightComponent,
    // StoreFormsComponent,
    // MarketStoreContactDetailsComponent,
    // MarketStoreStoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    GooglePlaceModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
