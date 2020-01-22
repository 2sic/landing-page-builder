window.onload = function () {
  initUrlTracking();
  initEventTracking();

  // ga('gtm1.send', 'pageview', location.pathname, 'landingpage');
  doLandingPageTracking('event', 'pageview', location.pathname, 'landingpage');
  const ctaBtn = document.querySelectorAll('.cta');

  for(var i = 0; i < ctaBtn.length; i++) {
    ctaBtn[i].addEventListener("click", (e) => {
      const _this = (e.currentTarget as HTMLElement);
      const href = _this.getAttribute('href');
      const ctaForm = document.querySelector('.cta-form');

      if(href == "#cta-form" && ctaForm !== null) {
        const offY = ctaForm.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({ top: offY - 100, left: 0, behavior: "smooth" })
      }
    })
  }
}

function initUrlTracking() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  if(utmSource !== null && utmMedium !== null && utmCampaign !== null) {
    doLandingPageTracking('event', utmSource, utmMedium, utmCampaign);
  }
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
  if((window as any).ga && ga.create) {
    ga('gtm1.send', event, category, action, label);
  }
}