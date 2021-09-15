import React from "react";
import { loremIpsum } from 'react-lorem-ipsum';

const UserInfo = (currentUser) => {
    console.log(currentUser.user);
    const {firstName, lastName, adress} = currentUser.user;
    const {city, state, streetAddress, zip} = adress;
  return (
    <div>
      <p>Selected profile: {firstName} {lastName}</p>
      <p>Description: {loremIpsum({avgSentencesPerParagraph: 1})}</p>
      <p>Adress:{streetAddress}</p>
      <p>City: {city}</p>
      <p>State:{state}</p>
      <p>Index: {zip}</p>
    </div>
  );
};

export default UserInfo;
