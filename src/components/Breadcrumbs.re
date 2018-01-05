let component = ReasonReact.statelessComponent("Breadcrumbs");

let make = (~bgColor, ~children) => {
  ...component,
  render: _self =>
    <nav className={j|bg-$(bgColor) p-3 rounded font-sans w-full|j}>
      <span className="flex text-grey-dark">
        (ReasonReact.arrayToElement(children))
      </span>
    </nav>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~bgColor=jsProps##bgColor, ~children=jsProps##children)
  );
