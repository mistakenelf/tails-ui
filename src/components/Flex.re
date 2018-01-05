let component = ReasonReact.statelessComponent("Flex");

let make =
    (~display, ~direction, ~wrap, ~justify, ~align, ~height, ~width, ~children) => {
  ...component,
  render: _self =>
    <div
      className={j| h-$(height) w-$(width) $(display) flex-$(direction) flex-$(wrap) justify-$(justify) items-$(align)|j}>
      (ReasonReact.arrayToElement(children))
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~display=jsProps##display,
      ~direction=jsProps##direction,
      ~wrap=jsProps##wrap,
      ~justify=jsProps##justify,
      ~align=jsProps##align,
      ~height=jsProps##height,
      ~width=jsProps##width,
      ~children=jsProps##children
    )
  );
