type action =
  | Toggle;

type state = {collapsed: bool};

let component = ReasonReact.reducerComponent("Collapsible");

let make = (~color="grey", ~title="Panel Title", ~children) => {
  ...component,
  initialState: () => {collapsed: false},
  reducer: (action, state) =>
    switch action {
    | Toggle => ReasonReact.Update({collapsed: ! state.collapsed})
    },
  render: self =>
    <div className={j|border-2 border-$(color)-light rounded|j}>
      <div
        className={j|flex flex-row items-center justify-between w-full border-b-2 border-$(color)-light p-2|j}>
        <div className="text-2xl text-grey-darker">
          (ReasonReact.stringToElement(title))
        </div>
        <div onClick=(_event => self.send(Toggle)) className="cursor-pointer">
          (
            self.state.collapsed === false ?
              <svg width="16" height="16" viewBox="0 0 32 32" fill="#606f7b">
                <path
                  d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"
                />
                <path
                  d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"
                />
              </svg> :
              ReasonReact.nullElement
          )
          (
            self.state.collapsed === true ?
              <svg width="16" height="16" viewBox="0 0 32 32" fill="#606f7b">
                <path
                  d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"
                />
                <path
                  d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"
                />
              </svg> :
              ReasonReact.nullElement
          )
        </div>
      </div>
      (
        self.state.collapsed === false ?
          <div className="p-2"> (ReasonReact.arrayToElement(children)) </div> :
          ReasonReact.nullElement
      )
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~color=jsProps##color,
      ~title=jsProps##title,
      ~children=jsProps##children
    )
  );
