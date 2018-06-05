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

export interface getExperienceQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // Work experience.
      experience:  Array< {
        __typename: "Experience",
        // The position name.
        position: string | null,
        // The workplace name.
        workplace: string | null,
        // The start date of the experience.
        from: string | null,
        // The end date of the experience.
        to: string | null,
        // The city or/and country.
        location: string | null,
        // Details of the experience.
        details: Array< string | null > | null,
      } | null > | null,
    } | null,
  } | null,
};

export interface getProjectsQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // Personal or work developed project.
      projects:  Array< {
        __typename: "Project",
        // The name of the project.
        name: string | null,
        // The homepage of the project.
        homepage: string | null,
        // The released data of the project.
        releaseDate: string | null,
        // Details of the project specifications.
        details: Array< string | null > | null,
      } | null > | null,
    } | null,
  } | null,
};

export interface getEducationQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // Study degrees and courses.
      education:  Array< {
        __typename: "Education",
        // Degree or course name.
        degree: string | null,
        // University or institution name.
        institution: string | null,
        // The start date of the education.
        from: string | null,
        // The end date of the education.
        to: string | null,
        // The city or/and country.
        location: string | null,
        // Details of the education.
        details: Array< string | null > | null,
      } | null > | null,
    } | null,
  } | null,
};
