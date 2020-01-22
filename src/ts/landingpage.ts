window.onload = function () {
  initUrlTracking();
  initEventTracking();

  doLandingPageTracking('event', 'landing-page', 'visit', '');
  
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

  document.addEventListener("trackMobiusForm", function(event) {
    const details = (event as any).detail;
    doLandingPageTracking('event', details.category, details.action, details.label);
  });
}


function initUrlTracking() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  if(utmSource !== null && utmMedium !== null && utmCampaign !== null) {
    doLandingPageTracking('event', 'landing-page', utmSource, utmCampaign);
  }
}

function initEventTracking() {
  const eventAction = document.querySelectorAll('[data-trackingevent]');
  
  for(var i = 0; i < eventAction.length; i++) {
    eventAction[i].addEventListener("click", (e) => {
      const _this = (e.currentTarget as HTMLElement);
      const action = _this.dataset.trackingevent;
      const label = _this.textContent;

      doLandingPageTracking('event', 'landing-page', action, label);
    })
  }
}

function doLandingPageTracking (event: string, category: string, action: string, label: string) {
  if(ga && ga.create) {
    ga('gtm1.send', event, category, action, label);
  }
}