let component = ReasonReact.statelessComponent("TextField");

let make =
    (
      ~label=?,
      ~value=?,
      ~htmlType="text",
      ~name=?,
      ~placeholder=?,
      ~color="teal",
      ~hasError=false,
      _children
    ) => {
  ...component,
  render: _self => {
    let errorStyle =
      [
        Js.Boolean.to_js_boolean(hasError) === Js.Boolean.to_js_boolean(true) ?
          "border-red hover:border-red" :
          {j|border-grey-light hover:border-$(color)|j}
      ]
      |> String.concat("");
    let labelComponent =
      switch label {
      | None => ReasonReact.nullElement
      | Some(label) => ReasonReact.stringToElement(label)
      };
    <div>
      (
        labelComponent === ReasonReact.stringToElement("") ?
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            labelComponent
          </label> :
          ReasonReact.nullElement
      )
      <input
        className={j|bg-grey-lighter appearance-none border-2 rounded w-full py-2 px-4 text-grey-darker $(errorStyle)|j}
        _type=htmlType
        ?value
        ?name
        ?placeholder
      />
    </div>;
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~label=?jsProps##label,
      ~value=?jsProps##value,
      ~htmlType=jsProps##htmlType,
      ~name=?jsProps##name,
      ~placeholder=?jsProps##placeholder,
      ~color=jsProps##color,
      ~hasError=?jsProps##hasError,
      [||]
    )
  );
