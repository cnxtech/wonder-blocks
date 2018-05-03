// @flow
import React from "react";
import {shallow} from "enzyme";

import ModalCloseButton from "./modal-close-button.js";

describe("ModalCloseButton", () => {
    test("Clicking the button triggers `onClick`", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<ModalCloseButton onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
        wrapper.find("button").simulate("click");
        expect(onClick).toHaveBeenCalled();
    });
});