let component = ReasonReact.statelessComponent("Card");

let make =
    (
      ~title: string,
      ~footer: array(ReasonReact.reactElement),
      ~children: array(ReasonReact.reactElement)
    ) => {
  ...component,
  render: _self =>
    <div className="max-w-sm rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">
          (ReasonReact.stringToElement(title))
        </div>
        (ReasonReact.arrayToElement(children))
      </div>
      <div className="px-6 py-4"> (ReasonReact.arrayToElement(footer)) </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~title=jsProps##title,
      ~footer=jsProps##footer,
      ~children=jsProps##children
    )
  );
