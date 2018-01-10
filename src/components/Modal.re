let component = ReasonReact.statelessComponent("Modal");

let make = (~title="Modal Title", ~handleClose=?, ~footer=?, ~children) => {
  ...component,
  render: _self =>
    <div className="fixed pin flex items-center">
      <div className="fixed pin bg-black opacity-75 z-10" />
      <div
        className="p-4 rounded shadow-lg bg-white relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl">
            (ReasonReact.stringToElement(title))
          </div>
          <button onClick=((_) => handleClose())>
            <span className="mr-2">
              (ReasonReact.stringToElement("close"))
            </span>
          </button>
        </div>
        <div> (ReasonReact.arrayToElement(children)) </div>
        (
          Array.length(footer) > 0 ?
            <div className="mt-4 flex justify-end">
              (ReasonReact.arrayToElement(footer))
            </div> :
            ReasonReact.nullElement
        )
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~title=jsProps##title,
      ~handleClose=jsProps##handleClose,
      ~footer=jsProps##footer,
      ~children=jsProps##children
    )
  );
