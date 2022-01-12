using ToSic.Razor.Blade;

public class Parts: Custom.Hybrid.Code12 
{

  public dynamic SectionStyle() {
    var presentation = Header.Presentation;
    return Tag.Attr("style", (Text.Has(presentation.BGImage) ? "background-image: url('" + Link.Image(presentation.BGImage, width: 2560, quality: 70) + "')" : ""));
  }

  public string SectionClasses() {
    var presentation = Header.Presentation;
    return "section-text-" + presentation.TextOptimization + " section-bg-color-" + presentation.BackgroundColor + (Text.Has(presentation.BGImage) ? " section-bg-img" : "");
  }

  public dynamic BackgroundDiv() {
    var presentation = Header.Presentation;
    return Tag.Div().Class("section-bg-img-overlay section-bg-effect-" + presentation.BGImageEffects);
  }

  public dynamic CtaList(dynamic ctas) {
    if(ctas.Count != 0) {  
      foreach (var cta in AsList(ctas)) {
        return Tag.A(cta.Label).Class("btn btn-primary btn-lg cta").Href(cta.Link).Attr("data-id", cta.EntityId).Attr("data-moduleid", CmsContext.Module.Id).Attr("data-trackingevent", "cta");
      }
    }
    return Tag.A();
  }

  public dynamic HeaderCta(dynamic ctas) {
    if(ctas.Count > 0) {
      return Tag.Div(Tag.Div(CtaList(ctas)).Class("col-12 text-center")).Class("row");
    }
    return Tag.Div();
  }
}
