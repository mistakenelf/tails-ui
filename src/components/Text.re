let component = ReasonReact.statelessComponent("Text");

let make =
    (
      ~font="sans",
      ~color="grey-darker",
      ~size="sm",
      ~weight="normal",
      ~align="left",
      ~fontStyle="normal-case",
      ~children
    ) => {
  ...component,
  render: _self =>
    <div
      className={j|text-$(color) font-$(font) text-$(size) font-$(weight) text-$(align) $(fontStyle)|j}>
      (ReasonReact.arrayToElement(children))
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~font=jsProps##font,
      ~color=jsProps##color,
      ~size=jsProps##size,
      ~weight=jsProps##weight,
      ~align=jsProps##align,
      ~fontStyle=jsProps##fontStyle,
      ~children=jsProps##children
    )
  );
