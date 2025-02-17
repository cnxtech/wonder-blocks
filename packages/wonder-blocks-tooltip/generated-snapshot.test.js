// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-tooltip
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import {View, Text} from "@khanacademy/wonder-blocks-core";
import Tooltip, {TooltipContent} from "@khanacademy/wonder-blocks-tooltip";
import {StyleSheet} from "aphrodite";
import {Body, LabelSmall} from "@khanacademy/wonder-blocks-typography";
import {OnePaneDialog, ModalLauncher} from "@khanacademy/wonder-blocks-modal";
import Button from "@khanacademy/wonder-blocks-button";
import IconButton from "@khanacademy/wonder-blocks-icon-button";
import {icons} from "@khanacademy/wonder-blocks-icon";
import {Strut, Spring} from "@khanacademy/wonder-blocks-layout";
import Spacing from "@khanacademy/wonder-blocks-spacing";

import TooltipTail from "./components/tooltip-tail.js";
import TooltipBubble from "./components/tooltip-bubble.js";

describe("wonder-blocks-tooltip", () => {
    it("example 1", () => {
        const example = (
            <Tooltip
                content="This is a text tooltip on the right"
                placement="right"
            >
                Some text
            </Tooltip>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 2", () => {
        const example = (
            <Tooltip
                id="my-a11y-tooltip"
                forceAnchorFocusivity={false}
                title="This tooltip has a title"
                content="I'm at the top!"
            >
                <View>
                    Some text
                    <input aria-describedby="my-a11y-tooltip" />
                </View>
            </Tooltip>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 3", () => {
        const styles = StyleSheet.create({
            scrollbox: {
                height: 100,
                overflow: "auto",
                border: "1px solid black",
                margin: 10,
            },
            hostbox: {
                minHeight: "200vh",
            },
        });
        const example = (
            <View>
                <View style={styles.scrollbox}>
                    <View style={styles.hostbox}>
                        <Body>
                            This is a big long piece of text with a
                            <Tooltip
                                content="This tooltip will disappear when scrolled out of bounds"
                                placement="bottom"
                            >
                                [tooltip]
                            </Tooltip>
                            <span> </span>in the middle.
                        </Body>
                    </View>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 4", () => {
        const styles = StyleSheet.create({
            scrollbox: {
                height: 100,
                overflow: "auto",
                border: "1px solid black",
                margin: 10,
            },
            hostbox: {
                minHeight: "200vh",
            },
            modalbox: {
                height: "200vh",
            },
        });
        const scrollyContent = (
            <View style={styles.scrollbox}>
                <View style={styles.hostbox}>
                    <Tooltip content="I'm on the left!" placement="left">
                        tooltip
                    </Tooltip>
                </View>
            </View>
        );
        const modalContent = (
            <View style={styles.modalbox}>{scrollyContent}</View>
        );
        const modal = (
            <OnePaneDialog
                title="My modal"
                footer="Still my modal"
                content={modalContent}
            />
        );
        const example = (
            <ModalLauncher modal={modal}>
                {({openModal}) => (
                    <Button onClick={openModal}>Click here!</Button>
                )}
            </ModalLauncher>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 5", () => {
        const styles = StyleSheet.create({
            block: {
                border: "solid 1px steelblue",
                width: 32,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
            },
        });
        const example = (
            <View>
                <LabelSmall>
                    Here, we can see that the first tooltip shown has an initial
                    delay before it appears, as does the last tooltip shown, yet
                    when moving between tooltipped items, the transition from
                    one to another is instantaneous.
                </LabelSmall>

                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <Tooltip content="Tooltip A" placement="bottom">
                        <View style={styles.block}>A</View>
                    </Tooltip>
                    <Tooltip content="Tooltip B" placement="bottom">
                        <View style={styles.block}>B</View>
                    </Tooltip>
                    <Tooltip content="Tooltip C" placement="bottom">
                        <View style={styles.block}>C</View>
                    </Tooltip>
                    <Tooltip content="Tooltip D" placement="bottom">
                        <View style={styles.block}>D</View>
                    </Tooltip>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 6", () => {
        const styles = {
            container: {
                flexDirection: "row",
                alignItems: "center",
            },
        };
        const example = (
            <View style={styles.container}>
                <Tooltip content="I'm a little tooltip">
                    <Button>Click me!</Button>
                </Tooltip>
                <Strut size={16} />
                <Tooltip content="Short and stout">
                    <IconButton
                        icon={icons.search}
                        aria-label="search"
                        onClick={(e) => console.log("hello")}
                    />
                </Tooltip>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 7", () => {
        const example = <TooltipContent>Just the content</TooltipContent>;
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 8", () => {
        const example = (
            <TooltipContent title="Title text!">
                Some content in my content
            </TooltipContent>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 9", () => {
        const {
            Body,
            LabelSmall,
        } = require("@khanacademy/wonder-blocks-typography");

        const example = (
            <TooltipContent title={<Body>Body text title!</Body>}>
                <Body>Body text content!</Body>
                <LabelSmall>And LabelSmall!</LabelSmall>
            </TooltipContent>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 10", () => {
        const styles = StyleSheet.create({
            guideContainer: {
                flexDirection: "row",
                height: Spacing.xxxSmall,
            },
            padding: {
                backgroundColor: "bisque",
                width: Spacing.xSmall,
            },
            tail: {
                backgroundColor: "green",
                width: Spacing.large,
            },
        });
        const example = (
            <View>
                <TooltipTail placement="top" />
                <View style={styles.guideContainer}>
                    <View key="padleft" style={styles.padding} />
                    <View key="tail" style={styles.tail} />
                    <View key="padright" style={styles.padding} />
                    <Spring key="spring" />
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 11", () => {
        const styles = StyleSheet.create({
            exampleContainer: {
                flexDirection: "row",
            },
            guideContainer: {
                width: Spacing.xxxSmall,
            },
            padding: {
                backgroundColor: "bisque",
                height: Spacing.xSmall,
            },
            tail: {
                backgroundColor: "green",
                height: Spacing.large,
            },
        });
        const example = (
            <View style={styles.exampleContainer}>
                <View style={styles.guideContainer}>
                    <View key="padleft" style={styles.padding} />
                    <View key="tail" style={styles.tail} />
                    <View key="padright" style={styles.padding} />
                    <Spring key="spring" />
                </View>
                <TooltipTail placement="right" />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 12", () => {
        const styles = StyleSheet.create({
            guideContainer: {
                flexDirection: "row",
                height: Spacing.xxxSmall,
            },
            padding: {
                backgroundColor: "bisque",
                width: Spacing.xSmall,
            },
            tail: {
                backgroundColor: "green",
                width: Spacing.large,
            },
        });
        const example = (
            <View>
                <View style={styles.guideContainer}>
                    <View key="padleft" style={styles.padding} />
                    <View key="tail" style={styles.tail} />
                    <View key="padright" style={styles.padding} />
                    <Spring key="spring" />
                </View>
                <TooltipTail placement="bottom" />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 13", () => {
        const styles = StyleSheet.create({
            exampleContainer: {
                flexDirection: "row",
            },
            guideContainer: {
                width: Spacing.xxxSmall,
            },
            padding: {
                backgroundColor: "bisque",
                height: Spacing.xSmall,
            },
            tail: {
                backgroundColor: "green",
                height: Spacing.large,
            },
        });
        const example = (
            <View style={styles.exampleContainer}>
                <TooltipTail placement="left" />
                <View style={styles.guideContainer}>
                    <View key="padleft" style={styles.padding} />
                    <View key="tail" style={styles.tail} />
                    <View key="padright" style={styles.padding} />
                    <Spring key="spring" />
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 14", () => {
        const example = (
            <View>
                <TooltipBubble
                    placement="top"
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>I'm on the top!</TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 15", () => {
        const example = (
            <View
                style={{
                    alignItems: "flex-start",
                }}
            >
                <TooltipBubble
                    placement="right"
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>I'm on the right!</TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 16", () => {
        const example = (
            <View>
                <TooltipBubble
                    placement="bottom"
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>I'm on the bottom!</TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 17", () => {
        const example = (
            <View>
                <TooltipBubble
                    placement="left"
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>I'm on the left!</TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 18", () => {
        const example = (
            <View>
                <TooltipBubble
                    placement="bottom"
                    tailOffset={{
                        left: 50,
                        top: 0,
                    }}
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>
                        I'm on the bottom with a tail 50px in!
                    </TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 19", () => {
        const example = (
            <View>
                <TooltipBubble
                    placement="top"
                    outOfBoundaries={true}
                    style={{
                        position: "relative",
                    }}
                >
                    <TooltipContent>
                        I'm hidden. So hidden. Shhhhh!
                    </TooltipContent>
                </TooltipBubble>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
