using ToSic.Razor.Blade;

public class Parts: Custom.Hybrid.Code12 
{

  public dynamic SectionStyle() {
    var bgImage = Header.Presentation.BGImage;
    return Tag.Attr("style", (Text.Has(bgImage) ? "background-image: url('" + Link.Image(bgImage, width: 2560, quality: 70) + "')" : ""));
  }

  public string SectionClasses() {
    return "section-text-" + Header.Presentation.TextOptimization + " section-bg-color-" + Header.Presentation.BackgroundColor + (Text.Has(Header.Presentation.BGImage) ? " section-bg-img" : "");
  }

  public dynamic BackgroundDiv() {
    return Tag.Div().Class("section-bg-img-overlay section-bg-effect-" + Header.Presentation.BGImageEffects);
  }

  public dynamic CtaList(dynamic ctas) {
    var ctaList = Tag.Div();
    foreach (var cta in AsList(ctas)) {
      ctaList.Add(Tag.A(cta.Label).Class("btn btn-primary btn-lg cta").Href(cta.Link).Attr("data-id", cta.EntityId).Attr("data-moduleid", CmsContext.Module.Id).Attr("data-trackingevent", "cta"));
    }
    return ctaList;
  }

  public dynamic HeaderCta(dynamic ctas) {
    return Tag.Div(Tag.Div(CtaList(ctas)).Class("col-12 text-center")).Class("row");
  }
}
