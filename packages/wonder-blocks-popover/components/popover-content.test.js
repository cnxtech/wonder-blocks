// @flow
import * as React from "react";

import {mount} from "../../../utils/testing/mount.js";

import PopoverContent from "./popover-content.js";
import PopoverContext from "./popover-context.js";

describe("PopoverContent", () => {
    it("should close the popover from the actions", () => {
        // Arrange
        const onCloseMock = jest.fn();

        const wrapper = mount(
            <PopoverContent
                onClose={onCloseMock}
                title="Title"
                content="content"
                actions={({close}) => (
                    <button data-close-button onClick={close}>
                        close popover
                    </button>
                )}
            />,
        );

        // Act
        wrapper.find("[data-close-button]").simulate("click");

        // Assert
        expect(onCloseMock).toBeCalled();
    });

    it("should warn when setting PopoverContext.Provider and onClose together", () => {
        // Arrange
        const nodes = (
            <PopoverContext.Provider value={{close: () => {}}}>
                <PopoverContent
                    title="title"
                    content="content"
                    onClose={() => {}}
                />
                ,
            </PopoverContext.Provider>
        );

        // Act
        const underTest = () => mount(nodes);

        // Assert
        expect(underTest).toThrowError(
            "You've specified 'onClose' on the content when using Popover. Please specify 'onClose' on the Popover instead",
        );
    });

    it("should warn when setting a image and icon at the same time", () => {
        // Arrange
        const nodes = (
            <PopoverContent
                title="illustration"
                content="content"
                image={<img src="/dummy-image.png" alt="popover image" />}
                icon={<img src="/dummy-icon.png" alt="popover icon" />}
            />
        );

        // Act
        const underTest = () => mount(nodes);

        // Assert
        expect(underTest).toThrowError(
            "'image' and 'icon' cannot be used at the same time. You can fix this by either removing 'image' or 'icon' from your instance.",
        );
    });

    it("should warn when setting a horizontal placement with an Illustration popover", () => {
        // Arrange
        const nodes = (
            <PopoverContext.Provider
                value={{close: () => {}, placement: "left"}}
            >
                <PopoverContent
                    title="illustration"
                    content="content"
                    image={<img src="/dummy-image.png" alt="dummy" />}
                />
            </PopoverContext.Provider>
        );

        // Act
        const underTest = () => mount(nodes);

        // Assert
        expect(underTest).toThrowError(
            "'image' can only be vertically placed. You can fix this by either changing `placement` to `top` or `bottom` or removing the `image` prop inside `content`.",
        );
    });
});
