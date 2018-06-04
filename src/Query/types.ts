/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface loadAppQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // The user name.
      name: string | null,
      // The user welcome message.
      welcomeMessage: Array< string | null > | null,
      // The user description.
      description: Array< string | null > | null,
    } | null,
  } | null,
};

export interface getSkillsQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // Technical and programming skills and language.
      skills:  Array< {
        __typename: "Skills",
        // The skill name.
        name: string | null,
      } | null > | null,
    } | null,
  } | null,
};
