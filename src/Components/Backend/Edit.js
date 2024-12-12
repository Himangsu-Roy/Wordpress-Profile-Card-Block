import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MyUsefulTextControl from "../UsefulComponents/MyUsefulTextControl";
import MyUsefulSelectControl from "../UsefulComponents/MyUsefulSelectControl";
import genderOptions from "../UsefulComponents/utils/genderOptions";
import MyUsefulFormFileUpload from "../UsefulComponents/MyUsefulFormFileUpload";
import MyUsefulCheckboxControl from "../UsefulComponents/MyUsefulCheckboxControl";
import MyUsefulButton from "../UsefulComponents/MyUsefulButton";
import { __experimentalSpacer as Spacer, Flex } from "@wordpress/components";

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
              <MyUsefulTextControl
                label="Name"
                placeholder="First Name"
                type="text"
              />
              <MyUsefulTextControl
                label=""
                placeholder="Last Name"
                type="text"
              />
              <MyUsefulTextControl
                label="Age"
                placeholder="ex:25"
                type="number"
              />
              <MyUsefulTextControl
                label="Date of Birth"
                placeholder=""
                type="date"
              />
              <MyUsefulSelectControl label="Gender" options={genderOptions} />
              <MyUsefulTextControl
                label="Email"
                placeholder="example@email.com"
                type="email"
              />
              <MyUsefulTextControl
                label="Address"
                placeholder="Street address"
                type="text"
              />
              <MyUsefulTextControl
                label=""
                placeholder="Street address line 2"
                type="text"
              />
              <MyUsefulTextControl
                label="Phone"
                placeholder="Area code"
                type="number"
              />
              <MyUsefulTextControl
                label=""
                placeholder="Phone number"
                type="number"
              />
              <MyUsefulTextControl
                label="Post/Zip code"
                placeholder="ex:8976"
                type="number"
              />
              <MyUsefulTextControl
                label="City"
                placeholder="ex:New York"
                type="text"
              />
              <MyUsefulFormFileUpload />
              <Spacer>
                <MyUsefulCheckboxControl />
              </Spacer>
              <MyUsefulButton />
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
