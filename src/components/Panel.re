let component = ReasonReact.statelessComponent("Panel");

let make = (~color="grey", ~title="Panel Title", ~extra=?, ~children) => {
  ...component,
  render: _self =>
    <div className={j|border-2 border-$(color)-light rounded|j}>
      <div
        className={j|flex flex-row items-center justify-between w-full border-b-2 border-$(color)-light p-2|j}>
        <div className="text-2xl text-grey-darker">
          (ReasonReact.stringToElement(title))
        </div>
        (
          Array.length(extra) > 0 ?
            <div> (ReasonReact.arrayToElement(extra)) </div> :
            ReasonReact.nullElement
        )
      </div>
      <div className="p-2"> (ReasonReact.arrayToElement(children)) </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~color=jsProps##color,
      ~title=jsProps##title,
      ~extra=jsProps##extra,
      ~children=jsProps##children
    )
  );
