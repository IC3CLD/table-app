import React from "react";
import { loremIpsum } from 'react-lorem-ipsum';

const UserInfo = (currentUser) => {
    const {firstName, lastName, adress} = currentUser.user;
    const {city, state, streetAddress, zip} = adress;
  return (
    <>
      <p>Selected profile: {firstName} {lastName}</p>
      <p>Description: {loremIpsum({avgSentencesPerParagraph: 1})}</p>
      <p>Adress: {streetAddress}</p>
      <p>City: {city}</p>
      <p>State:{state}</p>
      <p>Index: {zip}</p>
    </>
  );
};

export default UserInfo;
