---
layout: home
title: Home
description: Example Progressive Web App
---

<div class="app-hero app-hero--large govuk-!-margin-bottom-9 govuk-content">
  <div class="govuk-width-container">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds-from-desktop">
        <h1 class="app-hero__title">
          Progressive Web App 
        </h1>
        <p class="app-hero__description">
          A demonstration website to show an example website that uses PWA technologies for fun and entertainment.
        </p>
      </div>
      <div class="govuk-grid-column-one-third-from-desktop">
        <div class="app-hero__image">
          <img src="{{ site.baseurl }}/assets/images/donut.svg" width="60%" alt="" role="presentation">
        </div>
      </div>
    </div>
  </div>
</div>

Progressive Web Apps (PWAs) are web applications that leverage modern web technologies to provide users with an app-like experience. Unlike traditional web applications, PWAs can be installed on a user's device, providing access to the app directly from the home screen without requiring a download from an app store. PWAs are designed to work on any device and platform, including desktops, laptops, smartphones, and tablets, and can be accessed using any web browser. PWAs are designed to be fast, reliable, and engaging, with features such as push notifications, offline support, and the ability to work seamlessly in low-bandwidth or unreliable network conditions. PWAs are gaining popularity as they offer a more cost-effective and accessible alternative to traditional native apps while providing a comparable user experience.

<div class="app-width-container">
  <div class="govuk-main-wrapper govuk-main-wrapper--l">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
        <h2 class="govuk-heading-l">Are they installable?</h2>
        <p>Kind of? They appear as apps or as home screen icons.</p>
        <a href="#" id="install" class="govuk-button">Install me!</a>
      </div>
      <div class="govuk-grid-column-two-thirds-from-desktop govuk-!-margin-bottom-8">
        <h2 class="govuk-heading-l">Lets find out about you!</h2>
        <p class="govuk-body">Installing the app will show us a whole load more...</p>
        <a href="#" id="permissions" class="govuk-button">Permit me!</a>
      </div>
    </div>
  </div>
  <ul class="govuk-list" id="permissions-list">
  </ul>
</div>
