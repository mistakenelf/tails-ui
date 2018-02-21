let component = ReasonReact.statelessComponent("Checkbox");

let make = (~checked=false, ~disabled=false, ~label=?, _children) => {
  ...component,
  render: _self => {
    let labelComponent =
      switch label {
      | None => ReasonReact.nullElement
      | Some(label) => ReasonReact.stringToElement(label)
      };
    <div className="flex items-center">
      <input
        _type="checkbox"
        checked=(Js.Boolean.to_js_boolean(checked))
        disabled=(Js.Boolean.to_js_boolean(disabled))
      />
      (
        labelComponent === ReasonReact.stringToElement("") ?
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            labelComponent
          </label> :
          ReasonReact.nullElement
      )
    </div>;
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~checked=jsProps##checked,
      ~disabled=jsProps##disabled,
      ~label=jsProps##label,
      [||]
    )
  );
