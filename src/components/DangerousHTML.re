let dangerousHtml: string => Js.t('a) = html => {"__html": html};

let component = ReasonReact.statelessComponent("DangerousHTML");

let make = (~children) => {
  ...component,
  render: _self => <div dangerouslySetInnerHTML=(dangerousHtml(children)) />
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~children=jsProps##children)
  );
