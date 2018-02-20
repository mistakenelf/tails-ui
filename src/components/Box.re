let component = ReasonReact.statelessComponent("Box");

let make = (~sm="full", ~md="full", ~lg="full", ~xl="full", ~children) => {
  ...component,
  render: (_) =>
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
