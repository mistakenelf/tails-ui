let component = ReasonReact.statelessComponent("Navbar");

let make = (~color="teal", ~brand="Navbar", ~navRight=?, ~children) => {
  ...component,
  render: _self => {
    let navRightComponent =
      switch navRight {
      | None => ReasonReact.nullElement
      | Some(navRight) => ReasonReact.arrayToElement(navRight)
      };
    <div className={j|bg-$(color) text-white h-24 flex flex-col|j}>
      <div className="mt-4 pl-4 flex flex flex-row align-center w-full">
        <div className="text-3xl uppercase font-black">
          (ReasonReact.stringToElement(brand))
        </div>
        <div className="ml-auto pr-4"> navRightComponent </div>
      </div>
      <div
        className="mt-4 pl-4 overflow-x-scroll whitespace-no-wrap flex flex-row">
        (ReasonReact.arrayToElement(children))
      </div>
    </div>;
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~color=jsProps##color,
      ~brand=jsProps##brand,
      ~navRight=?jsProps##navRight,
      ~children=jsProps##children
    )
  );
