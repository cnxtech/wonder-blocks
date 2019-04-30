// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-modal
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import ModalLauncher from "./components/modal-launcher.js";
import OnePaneDialog from "./components/one-pane-dialog/one-pane-dialog.js";
import ModalDialog from "./components/modal-dialog.js";
import ModalPanel from "./components/modal-panel.js";
import ModalContent from "./components/modal-content.js";
import ModalHeader from "./components/modal-header.js";
import ModalFooter from "./components/modal-footer.js";

describe("wonder-blocks-modal", () => {
    it("example 1", () => {
        const React = require("react");

        const {Title} = require("@khanacademy/wonder-blocks-typography");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const Button = require("@khanacademy/wonder-blocks-button").default;

        class ModalWrapper extends React.Component {
            render() {
                return (
                    <OnePaneDialog
                        title="Title"
                        content={
                            <View>
                                <Title>Hello, world</Title>
                            </View>
                        }
                        footer={
                            <Button onClick={this.props.onClose}>
                                Close Modal
                            </Button>
                        }
                    />
                );
            }
        }

        const example = (
            <View style={{flexDirection: "row"}}>
                <ModalLauncher
                    onClose={() => window.alert("you closed the modal")}
                    modal={({closeModal}) => (
                        <ModalWrapper onClose={closeModal} />
                    )}
                >
                    {({openModal}) => (
                        <Button onClick={openModal}>Open Modal</Button>
                    )}
                </ModalLauncher>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {Title, Body} = require("@khanacademy/wonder-blocks-typography");
        const {MediaLayout} = require("@khanacademy/wonder-blocks-layout");

        const styles = StyleSheet.create({
            previewSizer: {
                height: 512,
            },

            modalPositioner: {
                // Checkerboard background
                backgroundImage:
                    "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        });

        const styleSheets = {
            mdOrLarger: StyleSheet.create({
                customModal: {
                    maxWidth: 300,
                    maxHeight: 200,
                },
            }),
        };

        const example = (
            <View style={styles.previewSizer}>
                <View style={styles.modalPositioner}>
                    <MediaLayout styleSheets={styleSheets}>
                        {({styles}) => (
                            <OnePaneDialog
                                style={styles.customModal}
                                title="title"
                                content={
                                    <View>
                                        <Title style={styles.title}>
                                            Title
                                        </Title>
                                        <Body>Hello World!</Body>
                                    </View>
                                }
                                onClose={() =>
                                    alert("This would close the modal.")
                                }
                            />
                        )}
                    </MediaLayout>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 3", () => {
        const {StyleSheet, css} = require("aphrodite");
        const {addStyle, View} = require("@khanacademy/wonder-blocks-core");
        const {
            Title,
            Body,
            LabelSmall,
        } = require("@khanacademy/wonder-blocks-typography");
        const Button = require("@khanacademy/wonder-blocks-button").default;

        const styles = StyleSheet.create({
            example: {
                padding: 32,
                alignItems: "center",
            },

            title: {
                marginBottom: 16,
            },

            modalContent: {
                margin: "0 auto",
                maxWidth: 544,
            },

            aboveStyles: {
                background: "url(/modal-above.png)",
                width: 874,
                height: 551,
                position: "absolute",
                top: -260,
                left: -420,
            },

            belowStyles: {
                background: "url(/modal-below.png)",
                width: 868,
                height: 521,
                position: "absolute",
                top: -420,
                left: -581,
            },
        });

        const StyledContainer = addStyle("div");

        const onePaneDialog = ({closeModal}) => (
            <OnePaneDialog
                title="Title"
                subtitle="You're reading the subtitle!"
                above={<StyledContainer style={styles.aboveStyles} />}
                below={<StyledContainer style={styles.belowStyles} />}
                content={
                    <View style={styles.modalContent}>
                        <Body tag="p">
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                            }
                        </Body>
                    </View>
                }
                footer={<Button onClick={closeModal}>Close modal</Button>}
            />
        );

        const example = (
            <View style={styles.example}>
                <ModalLauncher modal={onePaneDialog}>
                    {({openModal}) => (
                        <Button onClick={openModal}>OnePaneDialog</Button>
                    )}
                </ModalLauncher>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 4", () => {
        const React = require("react");

        const {Title} = require("@khanacademy/wonder-blocks-typography");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const Button = require("@khanacademy/wonder-blocks-button").default;
        const {
            ActionMenu,
            ActionItem,
        } = require("@khanacademy/wonder-blocks-dropdown");

        class Example extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    opened: false,
                };
            }

            handleOpen() {
                console.log("opening modal");
                this.setState({opened: true});
            }

            handleClose() {
                console.log("closing modal");
                this.setState({opened: false});
            }

            render() {
                return (
                    <View>
                        <ActionMenu menuText="actions">
                            <ActionItem
                                label="Open modal"
                                onClick={() => this.handleOpen()}
                            />
                        </ActionMenu>
                        <ModalLauncher
                            onClose={() => this.handleClose()}
                            opened={this.state.opened}
                            modal={({closeModal}) => (
                                <OnePaneDialog
                                    title="Triggered from action menu"
                                    content={
                                        <View>
                                            <Title>Hello, world</Title>
                                        </View>
                                    }
                                    footer={
                                        <Button onClick={closeModal}>
                                            Close Modal
                                        </Button>
                                    }
                                />
                            )}
                        />
                    </View>
                );
            }
        }

        const example = <Example />;
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 5", () => {
        const {StyleSheet, css} = require("aphrodite");
        const {addStyle, View} = require("@khanacademy/wonder-blocks-core");
        const {Title, Body} = require("@khanacademy/wonder-blocks-typography");
        const Button = require("@khanacademy/wonder-blocks-button").default;

        const styles = StyleSheet.create({
            previewSizer: {
                height: 512,
            },

            modalPositioner: {
                // Checkerboard background
                backgroundImage:
                    "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",

                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },

            modalContent: {
                margin: "0 auto",
                maxWidth: 544,
            },

            aboveStyles: {
                background: "url(/modal-above.png)",
                width: 874,
                height: 551,
                position: "absolute",
                top: -260,
                left: -420,
            },
        });

        const StyledContainer = addStyle("div");

        const example = (
            <View style={styles.previewSizer}>
                <View style={styles.modalPositioner}>
                    <OnePaneDialog
                        title="Title"
                        content={
                            <View style={styles.modalContent}>
                                <Body>
                                    {
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                                    }
                                </Body>
                            </View>
                        }
                        footer={
                            <View>
                                <Button type="button">Button (no-op)</Button>
                            </View>
                        }
                        onClose={() => alert("This would close the modal.")}
                        above={<StyledContainer style={styles.aboveStyles} />}
                    />
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 6", () => {
        const {StyleSheet, css} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {Title, Body} = require("@khanacademy/wonder-blocks-typography");
        const Button = require("@khanacademy/wonder-blocks-button").default;

        const styles = StyleSheet.create({
            previewSizer: {
                height: 512,
            },

            modalPositioner: {
                // Checkerboard background
                backgroundImage:
                    "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",

                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        });

        const example = (
            <View style={styles.previewSizer}>
                <View style={styles.modalPositioner}>
                    <OnePaneDialog
                        title="Title"
                        subtitle="Wow, look at all this content!"
                        content={
                            <View>
                                <Body>
                                    {
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                                    }
                                </Body>
                                <Body>
                                    {
                                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                </Body>
                                <Body>
                                    {
                                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                </Body>
                            </View>
                        }
                        footer={
                            <View>
                                <Button type="button">Button (no-op)</Button>
                            </View>
                        }
                        onClose={() => alert("This would close the modal.")}
                    />
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
