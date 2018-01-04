let component = ReasonReact.statelessComponent("Box");

let make =
    (
      ~sm: string,
      ~md: string,
      ~lg: string,
      ~xl: string,
      ~children: array(ReasonReact.reactElement)
    ) => {
  ...component,
  render: _self =>
    <div className={j|w-$(sm) sm:w-$(sm) md:w-$(md) lg:w-$(lg) xl:w-$(xl)|j}>
      (ReasonReact.arrayToElement(children))
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~sm=jsProps##sm,
      ~md=jsProps##md,
      ~lg=jsProps##lg,
      ~xl=jsProps##xl,
      ~children=jsProps##children
    )
  );
