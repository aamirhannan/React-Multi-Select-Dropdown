// import React, { useState } from "react";
// import styled from "styled-components";
// import Select from "react-select";
// import User from "./User";

// const options = [
//   { value: "user1", label: <User name="user1" email="user1@example.com" /> },
//   { value: "user2", label: <User name="user2" email="user2@example.com" /> },
//   { value: "user3", label: <User name="user3" email="user3@example.com" /> },
//   { value: "user4", label: <User name="user4" email="user4@example.com" /> },
//   { value: "user5", label: <User name="user5" email="user5@example.com" /> },
//   { value: "user6", label: <User name="user6" email="user6@example.com" /> },
//   { value: "user7", label: <User name="user7" email="user7@example.com" /> },
//   { value: "user8", label: <User name="user8" email="user8@example.com" /> },
//   { value: "user9", label: <User name="user9" email="user9@example.com" /> },
//   { value: "user10", label: <User name="user10" email="user10@example.com" /> },
// ];

// const SearchBar = () => {
//     return (
//     <MainContainer>
//       <div className="main-container">
//         <div className="top-heading">
//           <h1>Pick User</h1>
//         </div>
//         <Select
//           options={options}    
            
//           isMulti
//           styles={{
//             control: (baseStyles, state) => ({
//               ...baseStyles,
//               borderColor: state.isFocused ? "red" : "gray",
//               width: 500,
//               borderBottomColor: "blue",
//               borderBottomWidth: 3,
//             }),
//           }}
//         />
//       </div>
//     </MainContainer>
//   );
// };

// export default SearchBar;

// const MainContainer = styled.main`
//   .main-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   .top-heading {
//     color: blue;
//     margin-bottom: 60px;
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import User from "./User";

const options = [
  { value: "user1", email: "user1@example.com" },
  { value: "user2", email: "user2@example.com" },
  { value: "user3", email: "user3@example.com" },
  { value: "user4", email: "user4@example.com" },
  { value: "user5", email: "user5@example.com" },
  { value: "user6", email: "user6@example.com" },
  { value: "user7", email: "user7@example.com" },
  { value: "user8", email: "user8@example.com" },
  { value: "user9", email: "user9@example.com" },
  { value: "user10", email: "user10@example.com" },
];

const CustomOption = (props) => (
  <components.Option {...props}>
    <User name={props.data.value} email={props.data.email} />
  </components.Option>
);

const CustomSingleValue = (props) => (
  <components.SingleValue {...props}>
    <User name={props.data.value} email={props.data.email} />
  </components.SingleValue>
);

const SearchBar = () => {
  return (
    <MainContainer>
      <div className="main-container">
        <div className="top-heading">
          <h1>Pick User</h1>
        </div>
        <div className="selectContainer">
          {/* <div className="selected-value-display">
            {options.find(option => option.value === selectedValue).label}
          </div> */}
          <Select
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            options={options.map(option => ({
              value: option.value,
              label: option.value, // label is required by react-select
              email: option.email
            }))}
            isMulti={true}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "red" : "gray",
                width: 500,
                borderBottomColor: "blue",
                borderBottomWidth: 3,
                
              }),
            }}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default SearchBar;

const MainContainer = styled.main`
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top-heading {
    color: blue;
    margin-bottom: 60px;
  }

`;