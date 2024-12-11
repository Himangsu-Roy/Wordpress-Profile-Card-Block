import {
  __experimentalSpacer as Spacer,
  __experimentalText as Text,
  __experimentalVStack as VStack,
} from "@wordpress/components";

function VerticalStack() {
  return (
    <VStack>
      <Text>Code</Text>
      <Spacer>
        <Text>is</Text>
      </Spacer>
      <Text>Poetry</Text>
    </VStack>
  );
}

export default VerticalStack;
