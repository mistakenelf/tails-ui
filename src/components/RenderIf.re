let component = ReasonReact.statelessComponent("RenderIf");

let make = (~condition, ~children) => {
  ...component,
  render: _self =>
    Js.Boolean.to_js_boolean(condition) === Js.Boolean.to_js_boolean(true) ?
      ReasonReact.arrayToElement(children) : ReasonReact.nullElement
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~condition=jsProps##condition, ~children=jsProps##children)
  );
