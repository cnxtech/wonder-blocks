// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-clickable
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Clickable from "./components/clickable.js";

describe("wonder-blocks-clickable", () => {
    it("example 1", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {MemoryRouter, Route, Switch} = require("react-router-dom");
        const Color = require("@khanacademy/wonder-blocks-color").default;
        const {Body} = require("@khanacademy/wonder-blocks-typography");

        const styles = StyleSheet.create({
            focused: {
                border: "none",
            },
            hovered: {
                textDecoration: "underline",
            },
            pressed: {
                color: Color.teal,
            },
        });

        const example = (
            <View>
                <Clickable onClick={() => alert("You clicked some text!")}>
                    {(eventState) => (
                        <Body
                            style={[
                                eventState.focused && styles.focused,
                                eventState.hovered && styles.hovered,
                                eventState.pressed && styles.pressed,
                            ]}
                        >
                            This text is clickable!
                        </Body>
                    )}
                </Clickable>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const {StyleSheet} = require("aphrodite");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {MemoryRouter, Route, Switch} = require("react-router-dom");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
            },
            h1: {
                marginRight: "25px",
            },
        });

        // NOTE: In actual code you would use BrowserRouter instead
        const example = (
            <MemoryRouter>
                <View style={styles.row}>
                    <Clickable
                        href="/foo"
                        style={styles.h1}
                        onClick={() =>
                            console.log("I'm still on the same page!")
                        }
                    >
                        {(eventState) => <h1>Uses Client-side Nav</h1>}
                    </Clickable>
                    <Clickable href="/foo" style={styles.h1} skipClientNav>
                        {(eventState) => <h1>Avoids Client-side Nav</h1>}
                    </Clickable>
                    <Switch>
                        <Route path="/foo">
                            <View id="foo">Hello, world!</View>
                        </Route>
                    </Switch>
                </View>
            </MemoryRouter>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
