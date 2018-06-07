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
      // Image type
      image:  {
        __typename: "Images",
        // The image url
        url: string | null,
      } | null,
      // Social Media accounts.
      socialMedia:  Array< {
        __typename: "SocialMedia",
        // The name of the social media.
        name: string | null,
        // The social media string identifier(ex: facebook, instagram).
        identifier: string | null,
        // The url for the social media.
        url: string | null,
        // The display name for the social media URL.
        displayName: string | null,
      } | null > | null,
      // Technical and programming skills and language.
      skills:  Array< {
        __typename: "Skills",
        // The skill name.
        name: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export interface loadDataQuery {
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

export interface descriptionFragment {
  __typename: "User",
  // The user description.
  description: Array< string | null > | null,
};

export interface userInfoFragment {
  __typename: "User",
  // The user name.
  name: string | null,
  // Image type
  image:  {
    __typename: "Images",
    // The image url
    url: string | null,
  } | null,
};

export interface socialMediaFragment {
  __typename: "User",
  // Social Media accounts.
  socialMedia:  Array< {
    __typename: "SocialMedia",
    // The name of the social media.
    name: string | null,
    // The social media string identifier(ex: facebook, instagram).
    identifier: string | null,
    // The url for the social media.
    url: string | null,
    // The display name for the social media URL.
    displayName: string | null,
  } | null > | null,
};

export interface skillsFragment {
  __typename: "User",
  // Technical and programming skills and language.
  skills:  Array< {
    __typename: "Skills",
    // The skill name.
    name: string | null,
  } | null > | null,
};

export interface experienceFragment {
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
};

export interface educationFragment {
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
};

export interface projectsFragment {
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
};
