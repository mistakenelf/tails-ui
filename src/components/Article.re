let component = ReasonReact.statelessComponent("Article");

let make =
    (
      ~title: string,
      ~author: string,
      ~description: string,
      ~abstract: string,
      ~footer: array(ReasonReact.reactElement),
      _children
    ) => {
  ...component,
  render: _self =>
    <div className="w-full font-sans">
      <h1 className="font-sans font-thin mb-4">
        (ReasonReact.stringToElement(title))
      </h1>
      <p className="text-grey mb-3"> (ReasonReact.stringToElement(author)) </p>
      <h2 className="font-sans font-thin leading-normal mb-4">
        (ReasonReact.stringToElement(description))
      </h2>
      <p className="text-grey-darkest mb-6 leading-tight">
        (ReasonReact.stringToElement(abstract))
      </p>
      <div className="text-black no-underline uppercase">
        (ReasonReact.arrayToElement(footer))
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~title=jsProps##title,
      ~author=jsProps##author,
      ~description=jsProps##description,
      ~abstract=jsProps##abstract,
      ~footer=jsProps##footer,
      [||]
    )
  );
