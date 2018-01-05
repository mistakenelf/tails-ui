let component = ReasonReact.statelessComponent("Navbar");

let make = (~color, ~brand, ~navRight, ~children) => {
  ...component,
  render: _self =>
    <div className={j|bg-$(color) text-white h-24 flex flex-col|j}>
      <div className="mt-4 pl-4 flex flex flex-row align-center w-full">
        <div className="text-3xl uppercase font-black">
          (ReasonReact.stringToElement(brand))
        </div>
        <div className="ml-auto pr-4">
          (ReasonReact.arrayToElement(navRight))
        </div>
      </div>
      <div
        className="mt-4 pl-4 overflow-x-scroll whitespace-no-wrap flex flex-row">
        (ReasonReact.arrayToElement(children))
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~color=jsProps##color,
      ~brand=jsProps##brand,
      ~navRight=jsProps##navRight,
      ~children=jsProps##children
    )
  );
