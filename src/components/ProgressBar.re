let component = ReasonReact.statelessComponent("ProgressBar");

let make = (~color="teal", ~percent="50%", _children) => {
  ...component,
  render: _self =>
    <div className="w-full">
      <div className="shadow w-full bg-grey-light rounded">
        <div
          className={j|bg-$(color) rounded text-xs leading-none py-1 text-center text-white|j}
          style=(ReactDOMRe.Style.make(~width=percent, ()))>
          (ReasonReact.stringToElement(percent))
        </div>
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~color=jsProps##color, ~percent=jsProps##percent, [||])
  );
