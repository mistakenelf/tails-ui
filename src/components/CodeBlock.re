let component = ReasonReact.statelessComponent("CodeBlock");

let make = (~children) => {
  ...component,
  render: _self =>
    <pre className="bg-grey-lighter rounded border border-grey">
      <code className="font-mono">
        (ReasonReact.arrayToElement(children))
      </code>
    </pre>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~children=jsProps##children)
  );
