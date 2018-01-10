type action =
  | Toggle
  | Close;

type state = {isOpen: bool};

let component = ReasonReact.reducerComponent("Dropdown");

let make = (~text="Dropdown", ~color="teal", ~children) => {
  ...component,
  initialState: () => {isOpen: false},
  reducer: (action, state) =>
    switch action {
    | Toggle => ReasonReact.Update({isOpen: ! state.isOpen})
    | Close => ReasonReact.Update({isOpen: false})
    },
  render: self =>
    <div
      className="relative inline-block cursor-pointer"
      onClick=(_event => self.send(Toggle))
      onBlur=(_event => self.send(Close))>
      <button
        className={j|bg-$(color) hover:bg-$(color)-dark p-3 rounded text-white shadow-inner flex items-center justify-between|j}>
        <span className="pr-2"> (ReasonReact.stringToElement(text)) </span>
        (
          self.state.isOpen === false ?
            <svg width="16" height="16" viewBox="0 0 32 32" fill="#fff">
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
          self.state.isOpen === true ?
            <svg width="16" height="16" viewBox="0 0 32 32" fill="#fff">
              <path
                d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"
              />
              <path
                d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"
              />
            </svg> :
            ReasonReact.nullElement
        )
      </button>
      (
        self.state.isOpen === true ?
          <div className={j|bg-white shadow rounded z-10 p-4 min-w-full|j}>
            <div className="flex flex-col uppercase">
              (ReasonReact.arrayToElement(children))
            </div>
          </div> :
          ReasonReact.nullElement
      )
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~text=jsProps##text,
      ~color=jsProps##color,
      ~children=jsProps##children
    )
  );
