export class Tracking { 
  constructor( ) { }

  public init() {
    this.urlTracking();
    this.eventTracking();


  }

  public urlTracking() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  }

  public eventTracking() {
  }
}