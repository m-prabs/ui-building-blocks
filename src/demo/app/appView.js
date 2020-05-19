import { Fragment } from "@servicenow/ui-renderer-snabbdom";
import { Container, Row, Column } from "../../blocks";

import catView from "./category";
import itemView from "./item";

export default (state, { updateState }) => {
	console.log(state);
	return (
		<Fragment>
			<Container
				background-color="#f2f2f2"
				width="100vw"
				height="100vw"
				padding="15px"
			>
				<Row>
					<Container
						background-color="#007acc"
						width="20vw"
						height="30%"
						padding="15px"
						border-radius="8px"
					>
						<Column>
							{state.categories.map((cat) => catView(cat, updateState))}
						</Column>
					</Container>
					<Container padding-left="3vw" width="77vw">
						<Column>
							{state.data[state.selectedCategory].map((item) => itemView(item))}
						</Column>
					</Container>
				</Row>
			</Container>
		</Fragment>
	);
};
