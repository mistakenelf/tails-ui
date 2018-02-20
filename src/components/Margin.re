let component = ReasonReact.statelessComponent("Margin");

let make =
    (
      ~margin=?,
      ~marginLeft=?,
      ~marginRight=?,
      ~marginBottom=?,
      ~marginTop=?,
      _children
    ) => {
  ...component,
  render: _self =>
    <div
      className={j|m-$(margin) ml-$(marginLeft) mr-$(marginRight) mb-$(marginBottom) mt-$(marginTop)|j}
    />
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~margin=?jsProps##margin,
      ~marginLeft=?jsProps##marginLeft,
      ~marginRight=?jsProps##marginRight,
      ~marginBottom=?jsProps##marginBottom,
      ~marginTop=?jsProps##marginTop,
      [||]
    )
  );
