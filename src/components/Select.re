let component = ReasonReact.statelessComponent("Select");

let make =
    (~label=?, ~value=?, ~name=?, ~placeholder=?, ~color="teal", ~children) => {
  ...component,
  render: _self => {
    let labelComponent =
      switch label {
      | None => ReasonReact.nullElement
      | Some(label) => ReasonReact.stringToElement(label)
      };
    <div className="relative">
      (
        labelComponent === ReasonReact.stringToElement("") ?
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            labelComponent
          </label> :
          ReasonReact.nullElement
      )
      <select
        className={j|bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-$(color) rounded w-full py-2 px-4 mr-4 text-grey-darker|j}
        ?value
        ?name
        ?placeholder>
        (ReasonReact.arrayToElement(children))
      </select>
      <div
        className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>;
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~label=?jsProps##label,
      ~value=?jsProps##value,
      ~name=?jsProps##name,
      ~placeholder=?jsProps##placeholder,
      ~color=jsProps##color,
      ~children=jsProps##children
    )
  );
