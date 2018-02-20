let component = ReasonReact.statelessComponent("Flex");

let make =
    (
      ~display="flex",
      ~direction="row",
      ~wrap="no-wrap",
      ~justify="start",
      ~align="start",
      ~height="full",
      ~width="full",
      ~children
    ) => {
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
