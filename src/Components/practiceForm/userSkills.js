import { FormTokenField } from "@wordpress/components";
import { withState } from "@wordpress/compose";

const MyUserSkillsControls = withState({
  tokens: [],
  suggestions: ["Africa", "America", "Antarctica", "Asia", "Europe", "Oceania"],
})(({ tokens, suggestions, setState }) => (
  <FormTokenField
    label="Skills"
    value={tokens}
    suggestions={suggestions}
    onChange={(tokens) => console.log(tokens)}
  />
));

export default MyUserSkillsControls;
