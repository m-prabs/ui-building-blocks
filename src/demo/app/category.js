import { Container, Text } from "../../blocks";

export default (cat, updateState) => {
	return (
		<Container
			background-color="#ffa366"
			margin="20px"
			border-radius="4px"
			height="30px"
			center={true}
			on-click={() => {
				updateState({ selectedCategory: cat });
			}}
		>
			<Text color="white">{cat.toUpperCase()}</Text>
		</Container>
	);
};
