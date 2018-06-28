// @flow
// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-tooltip
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Tooltip from "./components/tooltip.js";

describe("wonder-blocks-tooltip", () => {
    it("example 1", () => {
        const React = require("react");
        const {Tooltip} = require("@khanacademy/wonder-blocks-tooltip");

        const example = (
            <Tooltip content={"The tooltip text"}>Some text</Tooltip>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {Tooltip} = require("@khanacademy/wonder-blocks-tooltip");

        const example = (
            <Tooltip forceAnchorFocusivity={false} content={"The tooltip text"}>
                <View>
                    Some text
                    <input />
                </View>
            </Tooltip>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 3", () => {
        const React = require("react");
        const {View, Text} = require("@khanacademy/wonder-blocks-core");
        const {Tooltip} = require("@khanacademy/wonder-blocks-tooltip");

        const example = (
            <div>
                <div
                    style={{
                        height: 100,
                        overflow: "auto",
                        border: "1px solid",
                        margin: 10,
                    }}
                >
                    <div style={{height: "200vh"}}>
                        <Text>This is a big long piece of text with a </Text>
                        <Tooltip content={"Some long text"}>
                            <Text style={{color: "red"}}>tooltip</Text>
                        </Tooltip>
                        <Text> in the middle.</Text>
                    </div>
                </div>
            </div>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 4", () => {
        const React = require("react");
        const {View, Text} = require("@khanacademy/wonder-blocks-core");
        const {Tooltip} = require("@khanacademy/wonder-blocks-tooltip");
        const {
            StandardModal,
            ModalLauncher,
        } = require("@khanacademy/wonder-blocks-modal");

        const scrollyContent = (
            <div
                style={{
                    height: 100,
                    overflow: "auto",
                    border: "1px solid",
                    margin: 10,
                }}
            >
                <div style={{height: "200vh"}}>
                    <Text>This is a big long piece of text with a </Text>
                    <Tooltip content={"Some long text"}>
                        <Text style={{color: "red"}}>tooltip</Text>
                    </Tooltip>
                    <Text> in the middle.</Text>
                </div>
            </div>
        );

        const modalContent = (
            <div style={{height: "200vh"}}>{scrollyContent}</div>
        );

        const modal = (
            <StandardModal
                title="My modal"
                footer="Still my modal"
                content={modalContent}
            />
        );

        const example = (
            <ModalLauncher modal={modal}>
                {({openModal}) => (
                    <button onClick={openModal}>Click here!</button>
                )}
            </ModalLauncher>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
