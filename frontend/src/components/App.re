/* This is the basic component. */
let component = ReasonReact.statelessComponent("App");

let handleClick = (_event, _self) => Js.log("clicked!");

let make = (~message, _children) => {
  ...component,
  render: self =>
    <div onClick=(self.handle(handleClick)) className="App">
      (ReasonReact.string(message))
    </div>,
};

