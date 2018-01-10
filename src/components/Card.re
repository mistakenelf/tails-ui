let component = ReasonReact.statelessComponent("Card");

let make = (~title="Card Title", ~footer=?, ~children) => {
  ...component,
  render: _self =>
    <div className="max-w-sm rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">
          (ReasonReact.stringToElement(title))
        </div>
        (ReasonReact.arrayToElement(children))
      </div>
      (
        Array.length(footer) > 0 ?
          <div className="px-6 py-4">
            (ReasonReact.arrayToElement(footer))
          </div> :
          ReasonReact.nullElement
      )
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
