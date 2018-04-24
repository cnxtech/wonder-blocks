**Example:**

A row inside of a grid containing many Cells. Each cell has a width of 1 and will display at different sizes of the viewport (always matching the number of available columns).

```jsx
const Color = require("wonder-blocks-color").default;
const {StyleSheet} = require("aphrodite");

const styles = StyleSheet.create({
	background: {
		background: Color.offBlack,
	},

	cell: {
		height: 100,
		padding: "5px 0",

		"@media (max-width: 767px)": {
			background: Color.blue,
		},

		"@media (min-width: 768px) and (max-width: 1023px)": {
			background: Color.green,
		},

		"@media (min-width: 1024px)": {
			background: Color.gold,
		},
	},
});

<View style={styles.background}>
	<Grid>
		<Row>
			<Cell width={1} style={styles.cell}>
				1
			</Cell>
			<Cell width={1} style={styles.cell}>
				1
			</Cell>
			<Cell width={1} style={styles.cell}>
				1
			</Cell>
			<Cell width={1} style={styles.cell}>
				1
			</Cell>
			<Cell medium={1} large={1} style={styles.cell}>
				1
			</Cell>
			<Cell medium={1} large={1} style={styles.cell}>
				1
			</Cell>
			<Cell medium={1} large={1} style={styles.cell}>
				1
			</Cell>
			<Cell medium={1} large={1} style={styles.cell}>
				1
			</Cell>
			<Cell large={1} style={styles.cell}>
				1
			</Cell>
			<Cell large={1} style={styles.cell}>
				1
			</Cell>
			<Cell large={1} style={styles.cell}>
				1
			</Cell>
			<Cell large={1} style={styles.cell}>
				1
			</Cell>
		</Row>
	</Grid>
</View>;
```