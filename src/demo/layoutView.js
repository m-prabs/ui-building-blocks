import { Fragment } from "@servicenow/ui-renderer-snabbdom";
import { Container, Row, Column, Text } from "../blocks";

export default () => {
	return (
		<Fragment>
			<Container>
				<Row justify-content="space-around">
					<Container
						background-color="#ffad99"
						padding-top="30px"
						border-radius="4px"
						min-height="300px"
					>
						<Column>
							<Container background-color="#99ebff">
								<Text>Item 1</Text>
							</Container>
							<Container background-color="#99ebff">
								<Text>Item 2</Text>
							</Container>
							<Container background-color="#99ebff">
								<Text>Item 3</Text>
							</Container>
							<Container background-color="#99ebff">
								<Text>Item 4</Text>
							</Container>
						</Column>
					</Container>
					<Container
						background-color="#ffad99"
						padding-top="30px"
						border-radius="4px"
					>
						<Column>
							<Container background-color="#99ebff">
								<Text>Item 1</Text>
							</Container>
							<Container background-color="#99ebff" width="600px">
								<Row>
									<Container>
										<Text>Item 2</Text>
									</Container>
									<Container>
										<Text>Item 3</Text>
									</Container>
								</Row>
							</Container>
							<Container background-color="#99ebff">
								<Text>Item 4</Text>
							</Container>
						</Column>
					</Container>
				</Row>
			</Container>
		</Fragment>
	);
};
