type action =
  | Select(int);

type state = {selectedImage: int};

type image = {
  key: int,
  alt: string,
  src: string
};

let component = ReasonReact.reducerComponent("ImageCarousel");

let make = (~images, ~color, _children) => {
  ...component,
  initialState: () => {selectedImage: 0},
  reducer: (action, _state) =>
    switch action {
    | Select(i) => ReasonReact.Update({selectedImage: i})
    },
  render: self =>
    <div>
      <div
        className={j|h-64 flex items-center justify-center border border-$(color)-light rounded mb-8|j}>
        (
          Array.length(images) > 0 ?
            <img
              className="h-64 w-full p-4"
              alt=images[self.state.selectedImage].alt
              src=images[self.state.selectedImage].src
            /> :
            ReasonReact.nullElement
        )
      </div>
      (
        Array.length(images) > 1 ?
          images
          |> Array.map((image: image) =>
               <div className="h-4 justify-center p-2 mb-4 cursor-pointer">
                 <div
                   className="h-full flex items-center justify-center"
                   onClick=(self.reduce(_event => Select(image.key)))>
                   <img
                     className="h-12 w-12 rounded"
                     alt=image.alt
                     src=image.src
                   />
                 </div>
               </div>
             )
          |> ReasonReact.arrayToElement :
          ReasonReact.nullElement
      )
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~images=jsProps##images, ~color=jsProps##color, [||])
  );
