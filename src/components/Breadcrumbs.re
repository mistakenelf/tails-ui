let component = ReasonReact.statelessComponent("Breadcrumbs");

type crumb = {
  key: int,
  value: ReasonReact.reactElement,
  hasSeparator: bool
};

type crumbsArray = array(crumb);

let make = (~bgColor: string, ~crumbs: crumbsArray, ~textColor: string) => {
  ...component,
  render: _self =>
    <nav className={j|$(bgColor) p-3 rounded font-sans w-full|j}>
      <ol className="list-reset flex text-grey-dark">
        (
          crumbs
          |> Array.map((crumb: crumb) =>
               <span key=(string_of_int(crumb.key))>
                 <li className={j|$(textColor) font-bold|j}> crumb.value </li>
               </span>
             )
          |> ReasonReact.arrayToElement
        )
      </ol>
    </nav>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~bgColor=jsProps##bgColor,
      ~crumbs=jsProps##crumbs,
      ~textColor=jsProps##textColor
    )
  );
