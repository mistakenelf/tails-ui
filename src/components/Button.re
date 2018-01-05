let component = ReasonReact.statelessComponent("Button");

let make =
    (
      ~fontColor,
      ~loading,
      ~width,
      ~backgroundColor,
      ~borderColor,
      ~borderRadius,
      ~children
    ) => {
  ...component,
  render: _self =>
    <button
      className={j|$(borderRadius) border-2 border-$(borderColor) w-$(width) cursor-pointer bg-$(backgroundColor) hover:bg-$(backgroundColor)-dark text-$(fontColor) font-sans font-bold py-2 px-4 shadow inline-flex items-center justify-center|j}>
      (
        loading === true ?
          ReasonReact.stringToElement("loading...") :
          ReasonReact.arrayToElement(children)
      )
    </button>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~fontColor=jsProps##fontColor,
      ~loading=jsProps##loading,
      ~width=jsProps##width,
      ~backgroundColor=jsProps##backgroundColor,
      ~borderColor=jsProps##borderColor,
      ~borderRadius=jsProps##borderRadius,
      ~children=jsProps##children
    )
  );
