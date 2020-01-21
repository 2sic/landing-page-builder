window.onload = function () {
  initUrlTracking();
  initEventTracking();

  // ga('gtm1.send', 'pageview', location.pathname, 'landingpage');
  doLandingPageTracking('event', 'pageview', location.pathname, 'landingpage');
}

function initUrlTracking() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  doLandingPageTracking('event', utmSource, utmMedium, utmCampaign);
}

function initEventTracking() {
  const eventAction = document.querySelectorAll('[data-trackingevent]');
  
  for(var i = 0; i < eventAction.length; i++) {
    eventAction[i].addEventListener("click", (e) => {
      const _this = (e.currentTarget as HTMLElement);
      const category = _this.dataset.trackingevent;
      const moduleId = _this.dataset.moduleid;

      doLandingPageTracking('event', category, 'click', moduleId);
    })
  }
}

function doLandingPageTracking(event: string, category: string, action: string, label: string) {
  ga('gtm1.send', event, category, action, label);
}