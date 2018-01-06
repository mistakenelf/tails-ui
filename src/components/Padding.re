let component = ReasonReact.statelessComponent("Padding");

let make =
    (
      ~padding,
      ~paddingLeft,
      ~paddingRight,
      ~paddingBottom,
      ~paddingTop,
      ~children
    ) => {
  ...component,
  render: _self =>
    <div
      className={j|p-$(padding) pl-$(paddingLeft) pr-$(paddingRight) pb-$(paddingBottom) pt-$(paddingTop)|j}>
      (ReasonReact.arrayToElement(children))
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~padding=jsProps##padding,
      ~paddingLeft=jsProps##paddingLeft,
      ~paddingRight=jsProps##paddingRight,
      ~paddingBottom=jsProps##paddingBottom,
      ~paddingTop=jsProps##paddingTop,
      ~children=jsProps##children
    )
  );
