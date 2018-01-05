let component = ReasonReact.statelessComponent("Checkbox");

let make = (~checked, ~disabled, ~handleChange, ~label, _children) => {
  ...component,
  render: _self =>
    <div className="flex items-center">
      <input
        _type="checkbox"
        checked=(Js.Boolean.to_js_boolean(checked))
        disabled
        onChange=((_) => handleChange())
      />
      (
        label !== "" ?
          <label className="ml-2 text-sm">
            (ReasonReact.stringToElement(label))
          </label> :
          ReasonReact.nullElement
      )
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~checked=jsProps##checked,
      ~disabled=jsProps##disabled,
      ~handleChange=jsProps##handleChange,
      ~label=jsProps##label,
      [||]
    )
  );
