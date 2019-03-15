// @flow

import * as React from "react";

import {
    MEDIA_DEFAULT_SPEC,
    MediaLayoutContext,
} from "@khanacademy/wonder-blocks-layout";
import Row from "./row.js";
import Cell from "./cell.js";
import {mount, unmountAll} from "../../../utils/testing/mount.js";

const wait = async (duration) =>
    new Promise((resolve, reject) => setTimeout(resolve, duration));

describe("Row", () => {
    beforeEach(() => {
        unmountAll();
        // Prevent jest complaining when JSDOM console.error's an exception
        jest.spyOn(console, "error");
        // eslint-disable-next-line no-console
        console.error.mockImplementation(() => {});
    });

    afterEach(() => {
        // eslint-disable-next-line no-console
        console.error.mockRestore();
    });

    describe("large", () => {
        it("should render Cells with largeCols and cols", () => {
            const wrapper = mount(
                <div>
                    <MediaLayoutContext.Provider
                        value={{
                            overrideSize: undefined,
                            ssrSize: "large",
                            mediaSpec: MEDIA_DEFAULT_SPEC,
                        }}
                    >
                        <Row>
                            <Cell cols={1}>cols</Cell>
                            <Cell largeCols={1}>largeCols</Cell>
                            <Cell mediumCols={1}>mediumCols</Cell>
                            <Cell smallCols={1}>smallCols</Cell>
                        </Row>
                    </MediaLayoutContext.Provider>
                </div>,
            );

            const text = wrapper.text();

            expect(text).toEqual("colslargeCols");
        });

        it("should throw if there are too many columns", async () => {
            const render = () => {
                mount(
                    <div>
                        <MediaLayoutContext.Provider
                            value={{
                                overrideSize: undefined,
                                ssrSize: "large",
                                mediaSpec: MEDIA_DEFAULT_SPEC,
                            }}
                        >
                            <Row>
                                <Cell cols={13}>cols</Cell>
                            </Row>
                        </MediaLayoutContext.Provider>
                    </div>,
                );
            };

            expect(render).toThrow();
        });
    });

    describe("medium", () => {
        it("should render Cells with largeCols and cols", async () => {
            await wait(500);

            const wrapper = mount(
                <div>
                    <MediaLayoutContext.Provider
                        value={{
                            overrideSize: undefined,
                            ssrSize: "medium",
                            mediaSpec: MEDIA_DEFAULT_SPEC,
                        }}
                    >
                        <Row>
                            <Cell cols={1}>cols</Cell>
                            <Cell largeCols={1}>largeCols</Cell>
                            <Cell mediumCols={1}>mediumCols</Cell>
                            <Cell smallCols={1}>smallCols</Cell>
                        </Row>
                    </MediaLayoutContext.Provider>
                </div>,
            );

            const text = wrapper.text();

            expect(text).toEqual("colsmediumCols");
        });

        it("should throw if there are too many columns", () => {
            const render = () => {
                mount(
                    <div>
                        <MediaLayoutContext.Provider
                            value={{
                                overrideSize: undefined,
                                ssrSize: "medium",
                                mediaSpec: MEDIA_DEFAULT_SPEC,
                            }}
                        >
                            <Row>
                                <Cell cols={9}>cols</Cell>
                            </Row>
                        </MediaLayoutContext.Provider>
                    </div>,
                );
            };

            expect(render).toThrow();
        });
    });

    describe.skip("small", () => {
        it("should render Cells with largeCols and cols", () => {
            const wrapper = mount(
                <div>
                    <MediaLayoutContext.Provider
                        value={{
                            overrideSize: undefined,
                            ssrSize: "small",
                            mediaSpec: MEDIA_DEFAULT_SPEC,
                        }}
                    >
                        <Row>
                            <Cell cols={1}>cols</Cell>
                            <Cell largeCols={1}>largeCols</Cell>
                            <Cell mediumCols={1}>mediumCols</Cell>
                            <Cell smallCols={1}>smallCols</Cell>
                        </Row>
                    </MediaLayoutContext.Provider>
                </div>,
            );

            const text = wrapper.text();

            expect(text).toEqual("colssmallCols");
        });

        it("should throw if there are too many columns", () => {
            const render = () => {
                mount(
                    <div>
                        <MediaLayoutContext.Provider
                            value={{
                                overrideSize: undefined,
                                ssrSize: "small",
                                mediaSpec: MEDIA_DEFAULT_SPEC,
                            }}
                        >
                            <Row>
                                <Cell cols={5}>cols</Cell>
                            </Row>
                        </MediaLayoutContext.Provider>
                    </div>,
                );
            };

            expect(render).toThrow();
        });
    });
});
