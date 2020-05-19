import { Container, Row, Column, Text, Image } from "../../blocks";

export default (item) => {
	return (
		<Container
			background-color="#fff"
			width="100%"
			padding="15px"
			border-radius="8px"
			margin-bottom="25px"
		>
			<Row justify-content="space-between">
				<Container width="10%">
					<Image src={item.image}></Image>
				</Container>
				<Container width="90%" height="100%" padding="10px 30px">
					<Column justify-content="center">
						<Text size="13px" text-style="italic">
							Rated: {item.rating}
						</Text>
						<Text size="40px">{item.title}</Text>
						<Text color="#737373" size="16px">
							{item.description}
						</Text>
					</Column>
				</Container>
			</Row>
		</Container>
	);
};
