### Creating a Clickable component

You can make custom components Clickable by simply returning them in function of the Clickable child. The eventState parameter the function takes allows access to states pressed, hovered and clicked, which you may use to create custom styles.

```jsx
import {StyleSheet} from "aphrodite";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import {View} from "@khanacademy/wonder-blocks-core";
import Color from "@khanacademy/wonder-blocks-color";
import {Body} from "@khanacademy/wonder-blocks-typography";

const styles = StyleSheet.create({
    hovered: {
        textDecoration: "underline",
        backgroundColor: Color.teal,
    },
    pressed: {
        color: Color.blue,
    },
});

<View>
    <Clickable onClick={() => alert("You clicked some text!")}>
        {
            eventState =>
            <View style={[eventState.hovered && styles.hovered]}>
                <Body style={[
                    eventState.hovered && styles.hovered,
                    eventState.pressed && styles.pressed
                    ]}>
                    This text is clickable!
                </Body>
            </View>
        }
    </Clickable>
</View>
```

### Client-Side routing with Clickable

If your Clickable component is within a React-Router enviroment, your component will automatically default to client-side routing with the `href` prop is set. This behavior can be toggeled by passing the `skipClientNav` prop. In this example we see two Clickable h1 tags, one which employs client-side routing, and the other uses skipClientNav to avoid this default behavior.

```jsx
import {StyleSheet} from "aphrodite";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import {View} from "@khanacademy/wonder-blocks-core";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {MemoryRouter, Route, Switch} from "react-router-dom";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    h1: {
        marginRight: Spacing.large,
    }
});

// NOTE: In actual code you would use BrowserRouter instead
<MemoryRouter>
    <View style={styles.row}>
        <Clickable href="/foo" style={styles.h1} onClick={() => console.log("I'm still on the same page!")}>
            {
                eventState =>
                    <h1>
                        Uses Client-side Nav
                    </h1>
            }
        </Clickable>
        <Clickable href="/foo" style={styles.h1} skipClientNav>
            {
                eventState =>
                    <h1>
                        Avoids Client-side Nav
                    </h1>
            }
        </Clickable>
        <Switch>
            <Route path="/foo">
                <View id="foo">Hello, world!</View>
            </Route>
        </Switch>
    </View>
</MemoryRouter>
```