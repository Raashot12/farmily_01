import { gql } from "@apollo/client";

export const ADD_TO_WAITING_LIST_MUTATION = gql`
	mutation AddToWaitingList($firstName: String!, $lastName: String!, $email: String!) {
		addToWaitingList(data: { firstName: $firstName, lastName: $lastName, email: $email })
	}
`;
