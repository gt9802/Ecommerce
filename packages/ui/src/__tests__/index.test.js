import { jsx as _jsx } from "react/jsx-runtime";
import * as ReactDOM from "react-dom";
import { CounterButton } from "../CounterButton";
describe("CounterButton", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(_jsx(CounterButton, {}), div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
