// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-popover
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Popover from "./components/popover.js";
import PopoverContent from "./components/popover-content.js";
import PopoverContentCore from "./components/popover-content-core.js";

describe("wonder-blocks-popover", () => {
    it("example 1", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <Popover
                    onClose={() => console.log("popover closed!")}
                    content={
                        <PopoverContent
                            closeButtonVisible
                            title="Title"
                            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                            image={
                                <img
                                    src="/illustration.svg"
                                    width={288}
                                    height={200}
                                />
                            }
                        />
                    }
                >
                    {({open}) => (
                        <Button onClick={open}>Open default popover</Button>
                    )}
                </Popover>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const Color = require("@khanacademy/wonder-blocks-color").default;
        const {addStyle, View} = require("@khanacademy/wonder-blocks-core");
        const {
            default: Icon,
            icons,
        } = require("@khanacademy/wonder-blocks-icon");
        const {Strut} = require("@khanacademy/wonder-blocks-layout");
        const Spacing = require("@khanacademy/wonder-blocks-spacing").default;
        const {
            HeadingSmall,
            LabelLarge,
        } = require("@khanacademy/wonder-blocks-typography");

        const customIcon = {
            small: "M6.92820 0L13.85640 4L13.85640 12L6.92820 16L0 12L0 4Z",
        };

        const styles = StyleSheet.create({
            example: {
                paddingTop: 300,
            },
            customPopover: {
                maxWidth: 420,
                width: 420,
                textAlign: "center",
            },
            row: {
                flexDirection: "row",
                justifyContent: "center",
                padding: `${Spacing.small}px 0`,
            },
            action: {
                backgroundColor: "transparent",
                border: "none",
                color: Color.white,
                cursor: "pointer",
                margin: Spacing.small,
                height: 100,
                padding: 2,
                alignItems: "center",
                justifyContent: "center",
            },
        });

        const CustomButton = addStyle("button");

        class ControlledPopover extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    popoverOpened: true,
                };
            }

            render() {
                return (
                    <View style={[styles.row]}>
                        <Popover
                            opened={this.state.popoverOpened}
                            onClose={() => {
                                console.log("popover closed!");
                                this.setState({popoverOpened: false});
                            }}
                            content={({close}) => (
                                <PopoverContentCore
                                    color="darkBlue"
                                    style={styles.customPopover}
                                >
                                    <View>
                                        <HeadingSmall>
                                            Custom popover title
                                        </HeadingSmall>
                                        <View style={styles.row}>
                                            <CustomButton
                                                style={styles.action}
                                                onClick={close}
                                                id="btn-1"
                                            >
                                                <Icon
                                                    icon={customIcon}
                                                    color={Color.gold}
                                                    size="large"
                                                />
                                                <LabelLarge>
                                                    Option 1
                                                </LabelLarge>
                                            </CustomButton>
                                            <CustomButton
                                                style={styles.action}
                                                onClick={close}
                                                id="btn-2"
                                            >
                                                <Icon
                                                    icon={customIcon}
                                                    color={Color.green}
                                                    size="large"
                                                />
                                                <LabelLarge>
                                                    Option 2
                                                </LabelLarge>
                                            </CustomButton>
                                            <CustomButton
                                                style={styles.action}
                                                onClick={close}
                                                id="btn-3"
                                            >
                                                <Icon
                                                    icon={customIcon}
                                                    color={Color.blue}
                                                    size="large"
                                                />
                                                <LabelLarge>
                                                    Option 3
                                                </LabelLarge>
                                            </CustomButton>
                                        </View>
                                    </View>
                                </PopoverContentCore>
                            )}
                        >
                            <Button
                                onClick={() =>
                                    console.log("This is a controlled popover.")
                                }
                            >
                                Anchor element (it doesn't open the popover)
                            </Button>
                        </Popover>
                        <Strut size={32} />
                        <Button
                            onClick={() => this.setState({popoverOpened: true})}
                        >
                            Outside button (click here to re-open the popover)
                        </Button>
                    </View>
                );
            }
        }

        const example = (
            <View style={[styles.row, styles.example]}>
                <ControlledPopover />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 3", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <Popover
                    placement="top"
                    onClose={() => console.log("popover closed!")}
                    content={
                        <PopoverContent
                            closeButtonVisible
                            title="Title"
                            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                            emphasized
                            actions={({close}) => (
                                <Button
                                    onClick={close}
                                    light={true}
                                    kind="primary"
                                >
                                    Continue
                                </Button>
                            )}
                        />
                    }
                >
                    <Button onClick={() => console.log("Custom click")}>
                        Open emphasized popover
                    </Button>
                </Popover>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 4", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <Popover
                    placement="top"
                    onClose={() => console.log("popover closed!")}
                    content={
                        <PopoverContent
                            title="Title"
                            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                            icon="/logo.svg"
                            closeButtonVisible
                        />
                    }
                >
                    <Button>Open icon popover</Button>
                </Popover>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 5", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <Popover
                    placement="top"
                    onClose={() => console.log("popover closed!")}
                    content={
                        <PopoverContent
                            title="Title"
                            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                            image={
                                <img
                                    src="/illustration.svg"
                                    width={288}
                                    height={200}
                                />
                            }
                            closeButtonVisible
                        />
                    }
                >
                    <Button>Open illustration popover</Button>
                </Popover>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 6", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <PopoverContent
                    closeButtonVisible
                    title="Title"
                    content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 7", () => {
        const {StyleSheet} = require("aphrodite");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {Strut} = require("@khanacademy/wonder-blocks-layout");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
            row: {
                flexDirection: "row",
            },
        });

        const example = (
            <View style={styles.example}>
                <PopoverContent
                    title="Title"
                    content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                    emphasized
                    actions={
                        <View style={styles.row}>
                            <Button light={true} kind="secondary">
                                Previous
                            </Button>
                            <Strut size={16} />
                            <Button light={true} kind="primary">
                                Next
                            </Button>
                        </View>
                    }
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 8", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <PopoverContent
                    title="Title"
                    content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                    icon="/logo.svg"
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 9", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");

        const styles = StyleSheet.create({
            example: {
                alignItems: "center",
            },
        });

        const example = (
            <View style={styles.example}>
                <PopoverContent
                    title="Title"
                    content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."
                    image={
                        <img src="/illustration.svg" width={288} height={200} />
                    }
                    closeButtonVisible
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 10", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {
            HeadingSmall,
            LabelLarge,
        } = require("@khanacademy/wonder-blocks-typography");
        const Spacing = require("@khanacademy/wonder-blocks-spacing").default;
        const Color = require("@khanacademy/wonder-blocks-color").default;
        const {
            default: Icon,
            icons,
        } = require("@khanacademy/wonder-blocks-icon");

        const customIcon = {
            small: "M6.92820 0L13.85640 4L13.85640 12L6.92820 16L0 12L0 4Z",
        };

        const styles = StyleSheet.create({
            customPopover: {
                maxWidth: 420,
                width: 420,
                textAlign: "center",
            },
            row: {
                flexDirection: "row",
                justifyContent: "center",
                padding: `${Spacing.small}px 0`,
            },
            action: {
                margin: Spacing.small,
                height: 100,
                padding: 2,
                alignItems: "center",
                justifyContent: "center",
            },
        });

        const example = (
            <View style={styles.row}>
                <PopoverContentCore
                    color="darkBlue"
                    style={styles.customPopover}
                    onClose={() => alert("close popover!")}
                >
                    <View>
                        <HeadingSmall>Custom popover title</HeadingSmall>
                        <View style={styles.row}>
                            <View style={styles.action}>
                                <Icon
                                    icon={customIcon}
                                    color={Color.gold}
                                    size="large"
                                />
                                <LabelLarge>Option 1</LabelLarge>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                    icon={customIcon}
                                    color={Color.green}
                                    size="large"
                                />
                                <LabelLarge>Option 2</LabelLarge>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                    icon={customIcon}
                                    color={Color.blue}
                                    size="large"
                                />
                                <LabelLarge>Option 3</LabelLarge>
                            </View>
                        </View>
                    </View>
                </PopoverContentCore>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
