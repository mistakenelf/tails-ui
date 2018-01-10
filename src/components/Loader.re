let component = ReasonReact.statelessComponent("Loader");

let make = (~color="teal", _children) => {
  ...component,
  render: _self =>
    <div
      className={j|loader border-6 border-$(color) bg-grey-light rounded-full w-8 h-8 border-t-4 shadow|j}
    />
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~color=jsProps##color, [||])
  );
