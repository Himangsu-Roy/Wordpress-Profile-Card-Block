import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MyUsefulTextControl from "../UsefulComponents/MyUsefulTextControl";
import MyUsefulSelectControl from "../UsefulComponents/MyUsefulSelectControl";
import genderOptions from "../UsefulComponents/utils/genderOptions";
import MyUsefulFormFileUpload from "../UsefulComponents/MyUsefulFormFileUpload";
import MyUsefulCheckboxControl from "../UsefulComponents/MyUsefulCheckboxControl";
import MyUsefulButton from "../UsefulComponents/MyUsefulButton";
import {
  __experimentalSpacer as Spacer,
  Flex,
  FlexItem,
  FlexBlock,
  ExternalLink,
} from "@wordpress/components";
import image from "../UsefulComponents/utils/FormImage";
import MyUsefulNumberControl from "../UsefulComponents/MyUsefulNumberControl";
import MyUsefulDateTimePicker from "../UsefulComponents/MyUsefulDateTime";
import MyUserNameTextControl from "../practiceForm/userName";
import MyUserEmailTextControl from "../practiceForm/userEmail";
import MyUserEmailControl from "../practiceForm/userEmail";
import MyUserPasswordControl from "../practiceForm/userPassword";
import MyUserSelectControl from "../practiceForm/userGender";
import MyUserSkillsControls from "../practiceForm/userSkills";
import MyUserAddressTextControl from "../practiceForm/userAddress";
import UserPhoneControl from "../practiceForm/userPhone";
import MyUserProfilePicControl from "../practiceForm/userProfilePic";
import MyUserAgreeWithTermsCheckboxControl from "../practiceForm/agreeWithTerms";
import UserAgeControl from "../practiceForm/userAge";
import MyUserDateOfBirthPicker from "../practiceForm/userDateOfBirth";
import UserFavoriteColor from "../practiceForm/userFavoriteColor";
import MyUserBioTextareaControl from "../practiceForm/userBio";
import MyUserProfilePageContainerWidth from "../practiceForm/profilePage/containerWidth";
import MyUserProfilePagePadding from "../practiceForm/profilePage/padding";
import MyUserProfilePageBorder from "../practiceForm/profilePage/border";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
          {purposeType === "test" ? (
            // <p>
            // 	Every text is written for a reason. For example, every text message you send has a purpose, whether that is to let your mum know when you will be home.
            // </p>
            <>
              {/* <img
                src={image}
                alt="Static image Example"
                style={{ maxWidth: "100%" }}
              /> */}
              {/* Name
              <Flex>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="First Name"
                    type="text"
                  />
                </FlexBlock>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="Last Name"
                    type="text"
                  />
                </FlexBlock>
              </Flex>
              Age
              <MyUsefulTextControl label="" placeholder="ex:25" type="number" />
              <MyUsefulNumberControl />
              Date of Birth
              <MyUsefulTextControl label="" placeholder="" type="date" />
              <MyUsefulDateTimePicker />
              Gender
              <MyUsefulSelectControl label="" options={genderOptions} />
              Email
              <MyUsefulTextControl
                label=""
                placeholder="example@email.com"
                type="email"
              />
              Address
              <Flex>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="Street address"
                    type="text"
                  />
                </FlexBlock>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="Street address line 2"
                    type="text"
                  />
                </FlexBlock>
              </Flex>
              Phone
              <Flex>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="Area code"
                    type="number"
                  />
                </FlexBlock>
                <FlexBlock>
                  <MyUsefulTextControl
                    label=""
                    placeholder="Phone number"
                    type="number"
                  />
                </FlexBlock>
              </Flex>
              <Flex>
                <FlexBlock>
                  Post/Zip code
                  <MyUsefulTextControl
                    label=""
                    placeholder="ex:8976"
                    type="number"
                  />
                </FlexBlock>
                <FlexBlock>
                  City
                  <MyUsefulTextControl
                    label=""
                    placeholder="ex:New York"
                    type="text"
                  />
                </FlexBlock>
              </Flex>
              <MyUsefulFormFileUpload />
              <Spacer>
                <Flex>
                  <FlexBlock>
                    <MyUsefulCheckboxControl />
                  </FlexBlock>

                  <label htmlFor="custom-text-control">
                    I agree to the defined
                    <ExternalLink
                      href="https://example.com/help"
                      style={{ marginLeft: "5px" }}
                    >
                      terms, conditions, and policies
                    </ExternalLink>
                  </label>
                </Flex>
              </Spacer>
              <MyUsefulButton /> */}

              <MyUserNameTextControl />
              <MyUserEmailControl />
              <MyUserPasswordControl />
              <MyUserSelectControl options={genderOptions} />
              <MyUserSkillsControls />
              <MyUserAddressTextControl />
              <UserPhoneControl />
              <MyUserProfilePicControl />
              <MyUserAgreeWithTermsCheckboxControl />
              <UserAgeControl />
              <MyUserDateOfBirthPicker />
              <UserFavoriteColor />
              <MyUserBioTextareaControl />
              <MyUserProfilePageContainerWidth />
              <MyUserProfilePagePadding />
              <MyUserProfilePageBorder />
            </>
          ) : (
            <p>
              If someone sends you an invitation to a party, for example, they
              are telling you what time to arrive and what the sender is
              celebrating, and they might even.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Edit;
